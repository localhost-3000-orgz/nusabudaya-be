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
    let query = this.provinceRepo
      .createQueryBuilder('province');
    query = this.applyRelations(query);
    return await query
      .where('province.id = :id', { id })
      .getOne();
  }

  async findBySlug(slug: string): Promise<Province | null> {
    let query = this.provinceRepo
      .createQueryBuilder('province');
    query = this.applyRelations(query);
    return await query
      .where('province.slug = :slug', { slug })
      .getOne();
  }

  async update(id: number, updateProvinceDto: UpdateProvinceDto): Promise<Province | null> {
    await this.provinceRepo.update(id, updateProvinceDto);
    return this.provinceRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.provinceRepo.delete(id);
  }

  private applyRelations(query: any): any {
    return query
      .leftJoinAndSelect('province.traditionalHouses', 'traditionalHouses')
      .leftJoinAndSelect('province.culinaries', 'culinaries')
      .leftJoinAndSelect('province.musicalInstruments', 'musicalInstruments')
      .leftJoinAndSelect('province.regionalSongs', 'regionalSongs')
      .leftJoinAndSelect('province.tourismSpots', 'tourismSpots')
      .leftJoinAndSelect('province.traditionalDances', 'traditionalDances')
      .leftJoinAndSelect('province.traditionalWeapons', 'traditionalWeapons')
      .leftJoinAndSelect('province.traditions', 'traditions');
  }
}
