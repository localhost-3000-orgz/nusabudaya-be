import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImageGuessDto } from './dto/create-image-guess.dto';
import { UpdateImageGuessDto } from './dto/update-image-guess.dto';
import { ImageGuess } from './entities/image-guess.entity';
import { Province } from '../provinces/entities/province.entity';

@Injectable()
export class ImageGuessesService {
  constructor(
    @InjectRepository(ImageGuess)
    private readonly imageGuessRepository: Repository<ImageGuess>,
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
  ) {}

  async create(createImageGuessDto: CreateImageGuessDto): Promise<ImageGuess> {
    const { provinceId, ...data } = createImageGuessDto;
    const province = await this.provinceRepository.findOne({
      where: { id: provinceId },
    });
    if (!province) {
      throw new NotFoundException(`Province with id ${provinceId} not found`);
    }
    const imageGuess = this.imageGuessRepository.create({
      ...data,
      province,
    });
    return await this.imageGuessRepository.save(imageGuess);
  }

  async findAll(): Promise<ImageGuess[]> {
    return await this.imageGuessRepository.find({ relations: ['province'] });
  }

  async findAllByProvince(provinceId: number): Promise<ImageGuess[]> {
    return await this.imageGuessRepository.find({
      where: { province: { id: provinceId } },
      relations: ['province'],
    });
  }

  async findOne(id: number): Promise<ImageGuess> {
    const imageGuess = await this.imageGuessRepository.findOne({
      where: { id },
      relations: ['province'],
    });
    if (!imageGuess) {
      throw new NotFoundException(`ImageGuess with id ${id} not found`);
    }
    return imageGuess;
  }

  async update(id: number, updateImageGuessDto: UpdateImageGuessDto): Promise<ImageGuess> {
    const imageGuess = await this.imageGuessRepository.findOne({
      where: { id },
      relations: ['province'],
    });
    if (!imageGuess) {
      throw new NotFoundException(`ImageGuess with id ${id} not found`);
    }
    if (updateImageGuessDto.provinceId !== undefined) {
      const province = await this.provinceRepository.findOne({
        where: { id: updateImageGuessDto.provinceId },
      });
      if (!province) {
      throw new NotFoundException(`Province with id ${updateImageGuessDto.provinceId} not found`);
      }
      imageGuess.province = province;
    }
    Object.assign(imageGuess, updateImageGuessDto);
    return await this.imageGuessRepository.save(imageGuess);
  }

  async remove(id: number): Promise<void> {
    const result = await this.imageGuessRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`ImageGuess with id ${id} not found`);
    }
  }
}
