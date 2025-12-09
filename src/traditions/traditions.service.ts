import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTraditionDto } from './dto/create-tradition.dto';
import { UpdateTraditionDto } from './dto/update-tradition.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tradition } from './entities/tradition.entity';
import { Repository } from 'typeorm';
import { Province } from 'src/provinces/entities/province.entity';

@Injectable()
export class TraditionsService {
  constructor(
    @InjectRepository(Tradition)
    private readonly traditionRepo: Repository<Tradition>,
    @InjectRepository(Province)
    private readonly provinceRepo: Repository<Province>,
  ) {}

  async create(createTraditionDto: CreateTraditionDto): Promise<Tradition> {
    const province = await this.provinceRepo.findOne({ where: { id: createTraditionDto.province_id } });
    if (!province) {
      throw new NotFoundException('Province not found');
    }

    const tradition = this.traditionRepo.create({
      name: createTraditionDto.name,
      description: createTraditionDto.description,
      event_date: createTraditionDto.event_date,
      province,
    });
    return await this.traditionRepo.save(tradition);
  }

  async findAll(): Promise<Tradition[]> {
    return await this.traditionRepo.find({ relations: ['province'] });
  }

  async findOne(id: number): Promise<Tradition | null> {
    return await this.traditionRepo.findOne({ where: { id }, relations: ['province'] });
  }

  async findByProvince(provinceId: number): Promise<Tradition[]> {
    return await this.traditionRepo.find({ where: { province: { id: provinceId } }, relations: ['province'] });
  }

  async update(id: number, updateTraditionDto: UpdateTraditionDto): Promise<Tradition | null> {
    let province: Province | undefined = undefined;
    if (updateTraditionDto.province_id) {
      const foundProvince = await this.provinceRepo.findOne({ where: { id: updateTraditionDto.province_id } });
      if (!foundProvince) {
        throw new NotFoundException('Province not found');
      }
      province = foundProvince;
    }

    const preloadData: Partial<Tradition> = {
      id,
      ...(updateTraditionDto.name && { name: updateTraditionDto.name }),
      ...(updateTraditionDto.description !== undefined && { description: updateTraditionDto.description }),
      ...(updateTraditionDto.event_date !== undefined && { event_date: updateTraditionDto.event_date }),
      ...(province && { province }),
    };

    const entity = await this.traditionRepo.preload(preloadData);

    if (!entity) {
      throw new NotFoundException('Tradition not found');
    }

    return this.traditionRepo.save(entity);
  }

  async remove(id: number): Promise<void> {
    await this.traditionRepo.delete(id);
  }
}

