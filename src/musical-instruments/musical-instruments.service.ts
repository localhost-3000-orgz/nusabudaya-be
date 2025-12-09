import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMusicalInstrumentDto } from './dto/create-musical-instrument.dto';
import { UpdateMusicalInstrumentDto } from './dto/update-musical-instrument.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MusicalInstrument } from './entities/musical-instrument.entity';
import { Repository } from 'typeorm';
import { Province } from 'src/provinces/entities/province.entity';

@Injectable()
export class MusicalInstrumentsService {
  constructor(
    @InjectRepository(MusicalInstrument)
    private readonly musicalInstrumentRepo: Repository<MusicalInstrument>,
    @InjectRepository(Province)
    private readonly provinceRepo: Repository<Province>,
  ) {}

  async create(createMusicalInstrumentDto: CreateMusicalInstrumentDto): Promise<MusicalInstrument> {
    const province = await this.provinceRepo.findOne({ where: { id: createMusicalInstrumentDto.province_id } });
    if (!province) {
      throw new NotFoundException('Province not found');
    }

    const musicalInstrument = this.musicalInstrumentRepo.create({
      name: createMusicalInstrumentDto.name,
      cara_main: createMusicalInstrumentDto.cara_main,
      image_url: createMusicalInstrumentDto.image_url,
      province,
    });
    return await this.musicalInstrumentRepo.save(musicalInstrument);
  }

  async findAll(): Promise<MusicalInstrument[]> {
    return await this.musicalInstrumentRepo.find({ relations: ['province'] });
  }

  async findOne(id: number): Promise<MusicalInstrument | null> {
    return await this.musicalInstrumentRepo.findOne({ where: { id }, relations: ['province'] });
  }

  async findByProvince(provinceId: number): Promise<MusicalInstrument[]> {
    return await this.musicalInstrumentRepo.find({ where: { province: { id: provinceId } }, relations: ['province'] });
  }

  async update(id: number, updateMusicalInstrumentDto: UpdateMusicalInstrumentDto): Promise<MusicalInstrument | null> {
    let province: Province | undefined = undefined;
    if (updateMusicalInstrumentDto.province_id) {
      const foundProvince = await this.provinceRepo.findOne({ where: { id: updateMusicalInstrumentDto.province_id } });
      if (!foundProvince) {
        throw new NotFoundException('Province not found');
      }
      province = foundProvince;
    }

    const preloadData: Partial<MusicalInstrument> = {
      id,
      ...(updateMusicalInstrumentDto.name && { name: updateMusicalInstrumentDto.name }),
      ...(updateMusicalInstrumentDto.cara_main !== undefined && { cara_main: updateMusicalInstrumentDto.cara_main }),
      ...(updateMusicalInstrumentDto.image_url !== undefined && { image_url: updateMusicalInstrumentDto.image_url }),
      ...(province && { province }),
    };

    const entity = await this.musicalInstrumentRepo.preload(preloadData);

    if (!entity) {
      throw new NotFoundException('Musical instrument not found');
    }

    return this.musicalInstrumentRepo.save(entity);
  }

  async remove(id: number): Promise<void> {
    await this.musicalInstrumentRepo.delete(id);
  }
}

