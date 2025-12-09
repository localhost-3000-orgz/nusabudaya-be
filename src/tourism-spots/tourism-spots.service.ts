import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTourismSpotDto } from './dto/create-tourism-spot.dto';
import { UpdateTourismSpotDto } from './dto/update-tourism-spot.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TourismSpot } from './entities/tourism-spot.entity';
import { Repository } from 'typeorm';
import { Province } from 'src/provinces/entities/province.entity';

@Injectable()
export class TourismSpotsService {
  constructor(
    @InjectRepository(TourismSpot)
    private readonly tourismSpotRepo: Repository<TourismSpot>,
    @InjectRepository(Province)
    private readonly provinceRepo: Repository<Province>,
  ) {}

  async create(createTourismSpotDto: CreateTourismSpotDto): Promise<TourismSpot> {
    const province = await this.provinceRepo.findOne({ where: { id: createTourismSpotDto.province_id } });
    if (!province) {
      throw new NotFoundException('Province not found');
    }

    const tourismSpot = this.tourismSpotRepo.create({
      name: createTourismSpotDto.name,
      location_address: createTourismSpotDto.location_address,
      maps_coordinate: createTourismSpotDto.maps_coordinate,
      description: createTourismSpotDto.description,
      image_url: createTourismSpotDto.image_url,
      province,
    });
    return await this.tourismSpotRepo.save(tourismSpot);
  }

  async findAll(): Promise<TourismSpot[]> {
    return await this.tourismSpotRepo.find({ relations: ['province'] });
  }

  async findOne(id: number): Promise<TourismSpot | null> {
    return await this.tourismSpotRepo.findOne({ where: { id }, relations: ['province'] });
  }

  async findByProvince(provinceId: number): Promise<TourismSpot[]> {
    return await this.tourismSpotRepo.find({ where: { province: { id: provinceId } }, relations: ['province'] });
  }

  async update(id: number, updateTourismSpotDto: UpdateTourismSpotDto): Promise<TourismSpot | null> {
    let province: Province | undefined = undefined;
    if (updateTourismSpotDto.province_id) {
      const foundProvince = await this.provinceRepo.findOne({ where: { id: updateTourismSpotDto.province_id } });
      if (!foundProvince) {
        throw new NotFoundException('Province not found');
      }
      province = foundProvince;
    }

    const preloadData: Partial<TourismSpot> = {
      id,
      ...(updateTourismSpotDto.name && { name: updateTourismSpotDto.name }),
      ...(updateTourismSpotDto.location_address !== undefined && { location_address: updateTourismSpotDto.location_address }),
      ...(updateTourismSpotDto.maps_coordinate !== undefined && { maps_coordinate: updateTourismSpotDto.maps_coordinate }),
      ...(updateTourismSpotDto.description !== undefined && { description: updateTourismSpotDto.description }),
      ...(updateTourismSpotDto.image_url !== undefined && { image_url: updateTourismSpotDto.image_url }),
      ...(province && { province }),
    };

    const entity = await this.tourismSpotRepo.preload(preloadData);

    if (!entity) {
      throw new NotFoundException('Tourism spot not found');
    }

    return this.tourismSpotRepo.save(entity);
  }

  async remove(id: number): Promise<void> {
    await this.tourismSpotRepo.delete(id);
  }
}

