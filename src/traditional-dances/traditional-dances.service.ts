import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTraditionalDanceDto } from './dto/create-traditional-dance.dto';
import { UpdateTraditionalDanceDto } from './dto/update-traditional-dance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TraditionalDance } from './entities/traditional-dance.entity';
import { Repository } from 'typeorm';
import { Province } from 'src/provinces/entities/province.entity';

@Injectable()
export class TraditionalDancesService {
  constructor(
    @InjectRepository(TraditionalDance)
    private readonly traditionalDanceRepo: Repository<TraditionalDance>,
    @InjectRepository(Province)
    private readonly provinceRepo: Repository<Province>,
  ) {}

  async create(createTraditionalDanceDto: CreateTraditionalDanceDto): Promise<TraditionalDance> {
    const province = await this.provinceRepo.findOne({ where: { id: createTraditionalDanceDto.province_id } });
    if (!province) {
      throw new NotFoundException('Province not found');
    }

    const traditionalDance = this.traditionalDanceRepo.create({
      name: createTraditionalDanceDto.name,
      description: createTraditionalDanceDto.description,
      video_url: createTraditionalDanceDto.video_url,
      province,
    });
    return await this.traditionalDanceRepo.save(traditionalDance);
  }

  async findAll(): Promise<TraditionalDance[]> {
    return await this.traditionalDanceRepo.find({ relations: ['province'] });
  }

  async findOne(id: number): Promise<TraditionalDance | null> {
    return await this.traditionalDanceRepo.findOne({ where: { id }, relations: ['province'] });
  }

  async findByProvince(provinceId: number): Promise<TraditionalDance[]> {
    return await this.traditionalDanceRepo.find({ where: { province: { id: provinceId } }, relations: ['province'] });
  }

  async update(id: number, updateTraditionalDanceDto: UpdateTraditionalDanceDto): Promise<TraditionalDance | null> {
    let province: Province | undefined = undefined;
    if (updateTraditionalDanceDto.province_id) {
      const foundProvince = await this.provinceRepo.findOne({ where: { id: updateTraditionalDanceDto.province_id } });
      if (!foundProvince) {
        throw new NotFoundException('Province not found');
      }
      province = foundProvince;
    }

    const preloadData: Partial<TraditionalDance> = {
      id,
      ...(updateTraditionalDanceDto.name && { name: updateTraditionalDanceDto.name }),
      ...(updateTraditionalDanceDto.description !== undefined && { description: updateTraditionalDanceDto.description }),
      ...(updateTraditionalDanceDto.video_url !== undefined && { video_url: updateTraditionalDanceDto.video_url }),
      ...(province && { province }),
    };

    const entity = await this.traditionalDanceRepo.preload(preloadData);

    if (!entity) {
      throw new NotFoundException('Traditional dance not found');
    }

    return this.traditionalDanceRepo.save(entity);
  }

  async remove(id: number): Promise<void> {
    await this.traditionalDanceRepo.delete(id);
  }
}

