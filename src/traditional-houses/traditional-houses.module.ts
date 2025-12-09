import { Module } from '@nestjs/common';
import { TraditionalHousesService } from './traditional-houses.service';
import { TraditionalHousesController } from './traditional-houses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraditionalHouse } from './entities/traditional-house.entity';
import { Province } from '../provinces/entities/province.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TraditionalHouse, Province])],
  controllers: [TraditionalHousesController],
  providers: [TraditionalHousesService],
})
export class TraditionalHousesModule {}

