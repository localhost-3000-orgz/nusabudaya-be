import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AchievementsService } from './achievements.service';
import { AchievementsController } from './achievements.controller';
import { Achievement } from './entities/achievement.entity';
import { User } from '../users/entities/user.entity';
import { Province } from '../provinces/entities/province.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Achievement, User, Province])
  ],
  controllers: [AchievementsController],
  providers: [AchievementsService],
  exports: [AchievementsService]
})
export class AchievementsModule {}
