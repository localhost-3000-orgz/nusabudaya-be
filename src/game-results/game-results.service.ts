import { Injectable } from '@nestjs/common';
import { CreateGameResultDto } from './dto/create-game-result.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GameResult } from './entities/game-result.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GameResultsService {
  constructor(
    @InjectRepository(GameResult)
    private readonly gameResultsRepository: Repository<GameResult>,
  ) {}

  async create(
    createGameResultDto: CreateGameResultDto,
    userId: string
  ): Promise<GameResult> {
    const gameResult = this.gameResultsRepository.create({
      ...createGameResultDto,
      province: { id: createGameResultDto.provinceId },
      user: { id: userId },
    });
    return await this.gameResultsRepository.save(gameResult);
  }

  async findAllByUserId(
    userId: string,
    type?: string,
    province_id?: number
  ): Promise<GameResult[]> {
    const where: any = {
      user: { id: userId }
    };
    if (type !== undefined) {
      where.type = type;
    }
    if (province_id !== undefined) {
      where.province = { id: province_id };
    }
    return await this.gameResultsRepository.find({
      where,
      relations: ['province', 'user'],
    });
  }

  async findOne(id: number): Promise<GameResult | null> {
    return await this.gameResultsRepository.findOne({
      where: { id },
      relations: ['province'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.gameResultsRepository.delete(id);
  }
}
