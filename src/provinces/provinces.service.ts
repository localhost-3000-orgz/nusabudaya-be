import { Injectable } from '@nestjs/common';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Province } from './entities/province.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProvincesService {
  constructor(
    @InjectRepository(Province)
    private readonly provinceRepo: Repository<Province>
  ) {}

  async create(createProvinceDto: CreateProvinceDto): Promise<Province> {
    const province = this.provinceRepo.create(createProvinceDto);
    return await this.provinceRepo.save(province);
  }

  async findAll(): Promise<Province[]> {
    return await this.provinceRepo.find();
  }

  async findOne(id: number): Promise<Province | null> {
    return await this.provinceRepo.findOneBy({ id });
  }

  async update(id: number, updateProvinceDto: UpdateProvinceDto): Promise<Province | null> {
    await this.provinceRepo.update(id, updateProvinceDto);
    return this.provinceRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.provinceRepo.delete(id);
  }
}
