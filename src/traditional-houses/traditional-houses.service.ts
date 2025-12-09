import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTraditionalHouseDto } from './dto/create-traditional-house.dto';
import { UpdateTraditionalHouseDto } from './dto/update-traditional-house.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TraditionalHouse } from './entities/traditional-house.entity';
import { Repository } from 'typeorm';
import { Province } from 'src/provinces/entities/province.entity';

@Injectable()
export class TraditionalHousesService {
  constructor(
    @InjectRepository(TraditionalHouse)
    private readonly traditionalHouseRepo: Repository<TraditionalHouse>,
    @InjectRepository(Province)
    private readonly provinceRepo: Repository<Province>
  ) {}

  async create(createTraditionalHouseDto: CreateTraditionalHouseDto): Promise<TraditionalHouse> {
    const province = await this.provinceRepo.findOne({ where: { id: createTraditionalHouseDto.province_id } });
    if (!province) {
      throw new NotFoundException('Province not found');
    }

    const traditionalHouse = this.traditionalHouseRepo.create({
      name: createTraditionalHouseDto.name,
      description: createTraditionalHouseDto.description,
      image_url: createTraditionalHouseDto.image_url,
      province: province
    });
    return await this.traditionalHouseRepo.save(traditionalHouse);
  }

  async findAll(): Promise<TraditionalHouse[]> {
    return await this.traditionalHouseRepo.find({ relations: ['province'] });
  }

  async findOne(id: number): Promise<TraditionalHouse | null> {
    return await this.traditionalHouseRepo.findOne({ where: { id }, relations: ['province'] });
  }

  async findByProvince(provinceId: number): Promise<TraditionalHouse[]> {
    return await this.traditionalHouseRepo.find({ where: { province: { id: provinceId } }, relations: ['province'] });
  }

  async update(id: number, updateTraditionalHouseDto: UpdateTraditionalHouseDto): Promise<TraditionalHouse | null> {
    let province: Province | undefined = undefined;
    if (updateTraditionalHouseDto.province_id) {
      const foundProvince = await this.provinceRepo.findOne({ where: { id: updateTraditionalHouseDto.province_id } });
      if (!foundProvince) {
        throw new NotFoundException('Province not found');
      }
      province = foundProvince;
    }

    const preloadData: Partial<TraditionalHouse> = {
      id,
      ...(updateTraditionalHouseDto.name && { name: updateTraditionalHouseDto.name }),
      ...(updateTraditionalHouseDto.description !== undefined && { description: updateTraditionalHouseDto.description }),
      ...(updateTraditionalHouseDto.image_url !== undefined && { image_url: updateTraditionalHouseDto.image_url }),
      ...(province && { province }),
    };

    const entity = await this.traditionalHouseRepo.preload(preloadData);

    if (!entity) {
      throw new NotFoundException('Traditional House not found');
    }

    return this.traditionalHouseRepo.save(entity);
  }

  async remove(id: number): Promise<void> {
    await this.traditionalHouseRepo.delete(id);
  }
}

