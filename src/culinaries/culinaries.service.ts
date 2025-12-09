import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCulinaryDto } from './dto/create-culinary.dto';
import { UpdateCulinaryDto } from './dto/update-culinary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Culinary } from './entities/culinary.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CulinariesService {
  constructor(
    @InjectRepository(Culinary)
    private readonly culinaryRepo: Repository<Culinary>
  ) {}

  async create(createCulinaryDto: CreateCulinaryDto): Promise<Culinary> {
    const province = await this.culinaryRepo.manager.getRepository('Province').findOne({ where: { id: createCulinaryDto.province_id } });
    if (!province) {
      throw new NotFoundException('Province not found');
    }

    const culinary = this.culinaryRepo.create({
      name: createCulinaryDto.name,
      description: createCulinaryDto.description,
      image_url: createCulinaryDto.image_url,
      province: province
    });
    return await this.culinaryRepo.save(culinary);
  }

  async findAll(): Promise<Culinary[]> {
    return await this.culinaryRepo.find({ relations: ['province'] });
  }

  async findOne(id: number): Promise<Culinary | null> {
    return await this.culinaryRepo.findOne({ where: { id }, relations: ['province'] });
  }

  async findByProvince(provinceId: number): Promise<Culinary[]> {
    return await this.culinaryRepo.find({ where: { province: { id: provinceId } }, relations: ['province'] });
  }

  async update(id: number, updateCulinaryDto: UpdateCulinaryDto): Promise<Culinary | null> {
    let province: any | undefined = undefined;
    if (updateCulinaryDto.province_id) {
      const foundProvince = await this.culinaryRepo.manager.getRepository('Province').findOne({ where: { id: updateCulinaryDto.province_id } });
      if (!foundProvince) {
        throw new NotFoundException('Province not found');
      }
      province = foundProvince;
    }

    const preloadData: Partial<Culinary> = {
      id,
      ...(updateCulinaryDto.name && { name: updateCulinaryDto.name }),
      ...(updateCulinaryDto.description !== undefined && { description: updateCulinaryDto.description }),
      ...(updateCulinaryDto.image_url !== undefined && { image_url: updateCulinaryDto.image_url }),
      ...(province && { province }),
    };

    const entity = await this.culinaryRepo.preload(preloadData);

    if (!entity) {
      throw new NotFoundException('Culinary not found');
    }

    return this.culinaryRepo.save(entity);
  }

  async remove(id: number): Promise<void> {
    await this.culinaryRepo.delete(id);
  }
}

