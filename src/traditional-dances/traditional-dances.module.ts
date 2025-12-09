import { Module } from '@nestjs/common';
import { TraditionalDancesService } from './traditional-dances.service';
import { TraditionalDancesController } from './traditional-dances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraditionalDance } from './entities/traditional-dance.entity';
import { Province } from 'src/provinces/entities/province.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TraditionalDance, Province])],
  controllers: [TraditionalDancesController],
  providers: [TraditionalDancesService],
})
export class TraditionalDancesModule {}

