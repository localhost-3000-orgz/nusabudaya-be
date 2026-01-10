import { Injectable } from '@nestjs/common';
import { CreateGameResultDto } from './dto/create-game-result.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GameResult } from './entities/game-result.entity';
import { Repository } from 'typeorm';
import { AchievementsService } from 'src/achievements/achievements.service';
import { GameType } from './entities/game-result.entity';

@Injectable()
export class GameResultsService {
  constructor(
    @InjectRepository(GameResult)
    private readonly gameResultsRepository: Repository<GameResult>,

    private readonly achievementsService: AchievementsService,
  ) {}

  async create(
    createGameResultDto: CreateGameResultDto,
    userId: string
  ): Promise<any> {
    const gameResult = this.gameResultsRepository.create({
      ...createGameResultDto,
      province: { id: createGameResultDto.provinceId },
      user: { id: userId },
    });
    const savedResult = await this.gameResultsRepository.save(gameResult);

    const requiredGameTypes = [
      GameType.GUESS,
      GameType.MEMORY_CARD,
      GameType.QUIZ
    ];

    const existingResults = await this.gameResultsRepository.find({
      where: {
        province: { id: createGameResultDto.provinceId },
        user: { id: userId }
      }
    });

    const foundAllTypes = requiredGameTypes.every(type =>
      existingResults.some(result => result.type === type)
    );

    let achievementCreated = false;

    if (foundAllTypes) {
      const allComplete = requiredGameTypes.every(type =>
        existingResults.some(r => r.type === type && r.is_complete === true)
      );

      if (allComplete) {
        const existingAchievement = await this.achievementsService.findByProvince(
          createGameResultDto.provinceId,
          userId
        );
        if (!existingAchievement) {
          await this.achievementsService.create(
            { provinceId: createGameResultDto.provinceId },
            userId
          );
          achievementCreated = true;
        }
      }
    }

    return {
      ...savedResult,
      achievementCreated
    };
  }

  async findGlobal() {
    const results = await this.gameResultsRepository
      .createQueryBuilder("game_result")
      .select("game_result.user_id", "user_id")
      .addSelect("SUM(game_result.xp)", "total_xp")
      .groupBy("game_result.user_id")
      .orderBy("total_xp", "DESC")
      .getRawMany();

    return results;
  }

  async findAllByUserId(
    userId: string,
    type?: string,
    province_id?: number
  ) {
    const where: any = {
      user: { id: userId }
    };
    if (type !== undefined) {
      where.type = type;
    }
    if (province_id !== undefined) {
      where.province = { id: province_id };
    }
    const gameResults = await this.gameResultsRepository.find({
      where,
      relations: ['province'],
      order: {
        id: 'ASC',
      },
    });

    // Calculate total xp
    const totalXp = gameResults.reduce((acc, result) => acc + (result.xp || 0), 0);

    // Count province badge
    const badges = await this.achievementsService.findByUser(userId);
    const badgeCount = badges.length;

    return {
      total_xp: totalXp,
      badge_count: badgeCount,
      results: gameResults,
    };
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
