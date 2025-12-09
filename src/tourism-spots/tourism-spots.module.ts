import { Module } from '@nestjs/common';
import { TourismSpotsService } from './tourism-spots.service';
import { TourismSpotsController } from './tourism-spots.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourismSpot } from './entities/tourism-spot.entity';
import { Province } from 'src/provinces/entities/province.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TourismSpot, Province])],
  controllers: [TourismSpotsController],
  providers: [TourismSpotsService],
})
export class TourismSpotsModule {}

