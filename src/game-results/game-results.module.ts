import { Module } from '@nestjs/common';
import { GameResultsService } from './game-results.service';
import { GameResultsController } from './game-results.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameResult } from './entities/game-result.entity';
import { Province } from 'src/provinces/entities/province.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GameResult])],
  controllers: [GameResultsController],
  providers: [GameResultsService],
})
export class GameResultsModule {}
