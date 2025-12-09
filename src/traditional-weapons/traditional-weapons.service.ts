import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTraditionalWeaponDto } from './dto/create-traditional-weapon.dto';
import { UpdateTraditionalWeaponDto } from './dto/update-traditional-weapon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TraditionalWeapon } from './entities/traditional-weapon.entity';
import { Repository } from 'typeorm';
import { Province } from 'src/provinces/entities/province.entity';

@Injectable()
export class TraditionalWeaponsService {
  constructor(
    @InjectRepository(TraditionalWeapon)
    private readonly traditionalWeaponRepo: Repository<TraditionalWeapon>,
    @InjectRepository(Province)
    private readonly provinceRepo: Repository<Province>,
  ) {}

  async create(createTraditionalWeaponDto: CreateTraditionalWeaponDto): Promise<TraditionalWeapon> {
    const province = await this.provinceRepo.findOne({ where: { id: createTraditionalWeaponDto.province_id } });
    if (!province) {
      throw new NotFoundException('Province not found');
    }

    const traditionalWeapon = this.traditionalWeaponRepo.create({
      name: createTraditionalWeaponDto.name,
      description: createTraditionalWeaponDto.description,
      image_url: createTraditionalWeaponDto.image_url,
      province,
    });
    return await this.traditionalWeaponRepo.save(traditionalWeapon);
  }

  async findAll(): Promise<TraditionalWeapon[]> {
    return await this.traditionalWeaponRepo.find({ relations: ['province'] });
  }

  async findOne(id: number): Promise<TraditionalWeapon | null> {
    return await this.traditionalWeaponRepo.findOne({ where: { id }, relations: ['province'] });
  }

  async findByProvince(provinceId: number): Promise<TraditionalWeapon[]> {
    return await this.traditionalWeaponRepo.find({ where: { province: { id: provinceId } }, relations: ['province'] });
  }

  async update(id: number, updateTraditionalWeaponDto: UpdateTraditionalWeaponDto): Promise<TraditionalWeapon | null> {
    let province: Province | undefined = undefined;
    if (updateTraditionalWeaponDto.province_id) {
      const foundProvince = await this.provinceRepo.findOne({ where: { id: updateTraditionalWeaponDto.province_id } });
      if (!foundProvince) {
        throw new NotFoundException('Province not found');
      }
      province = foundProvince;
    }

    const preloadData: Partial<TraditionalWeapon> = {
      id,
      ...(updateTraditionalWeaponDto.name && { name: updateTraditionalWeaponDto.name }),
      ...(updateTraditionalWeaponDto.description !== undefined && { description: updateTraditionalWeaponDto.description }),
      ...(updateTraditionalWeaponDto.image_url !== undefined && { image_url: updateTraditionalWeaponDto.image_url }),
      ...(province && { province }),
    };

    const entity = await this.traditionalWeaponRepo.preload(preloadData);

    if (!entity) {
      throw new NotFoundException('Traditional weapon not found');
    }

    return this.traditionalWeaponRepo.save(entity);
  }

  async remove(id: number): Promise<void> {
    await this.traditionalWeaponRepo.delete(id);
  }
}

