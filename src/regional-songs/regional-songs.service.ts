import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegionalSongDto } from './dto/create-regional-song.dto';
import { UpdateRegionalSongDto } from './dto/update-regional-song.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RegionalSong } from './entities/regional-song.entity';
import { Repository } from 'typeorm';
import { Province } from 'src/provinces/entities/province.entity';

@Injectable()
export class RegionalSongsService {
  constructor(
    @InjectRepository(RegionalSong)
    private readonly regionalSongRepo: Repository<RegionalSong>,
    @InjectRepository(Province)
    private readonly provinceRepo: Repository<Province>,
  ) {}

  async create(createRegionalSongDto: CreateRegionalSongDto): Promise<RegionalSong> {
    const province = await this.provinceRepo.findOne({ where: { id: createRegionalSongDto.province_id } });
    if (!province) {
      throw new NotFoundException('Province not found');
    }

    const regionalSong = this.regionalSongRepo.create({
      title: createRegionalSongDto.title,
      lyrics: createRegionalSongDto.lyrics,
      audio_url: createRegionalSongDto.audio_url,
      province,
    });
    return await this.regionalSongRepo.save(regionalSong);
  }

  async findAll(): Promise<RegionalSong[]> {
    return await this.regionalSongRepo.find({ relations: ['province'] });
  }

  async findOne(id: number): Promise<RegionalSong | null> {
    return await this.regionalSongRepo.findOne({ where: { id }, relations: ['province'] });
  }

  async findByProvince(provinceId: number): Promise<RegionalSong[]> {
    return await this.regionalSongRepo.find({ where: { province: { id: provinceId } }, relations: ['province'] });
  }

  async update(id: number, updateRegionalSongDto: UpdateRegionalSongDto): Promise<RegionalSong | null> {
    let province: Province | undefined = undefined;
    if (updateRegionalSongDto.province_id) {
      const foundProvince = await this.provinceRepo.findOne({ where: { id: updateRegionalSongDto.province_id } });
      if (!foundProvince) {
        throw new NotFoundException('Province not found');
      }
      province = foundProvince;
    }

    const preloadData: Partial<RegionalSong> = {
      id,
      ...(updateRegionalSongDto.title && { title: updateRegionalSongDto.title }),
      ...(updateRegionalSongDto.lyrics !== undefined && { lyrics: updateRegionalSongDto.lyrics }),
      ...(updateRegionalSongDto.audio_url !== undefined && { audio_url: updateRegionalSongDto.audio_url }),
      ...(province && { province }),
    };

    const entity = await this.regionalSongRepo.preload(preloadData);

    if (!entity) {
      throw new NotFoundException('Regional song not found');
    }

    return this.regionalSongRepo.save(entity);
  }

  async remove(id: number): Promise<void> {
    await this.regionalSongRepo.delete(id);
  }
}

