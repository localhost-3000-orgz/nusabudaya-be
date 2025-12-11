import { Module } from '@nestjs/common';
import { GameResultsService } from './game-results.service';
import { GameResultsController } from './game-results.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameResult } from './entities/game-result.entity';
import { AchievementsModule } from 'src/achievements/achievements.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([GameResult]),
    AchievementsModule,
  ],
  controllers: [GameResultsController],
  providers: [GameResultsService],
})
export class GameResultsModule {}
