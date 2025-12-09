import { Module } from '@nestjs/common';
import { MusicalInstrumentsService } from './musical-instruments.service';
import { MusicalInstrumentsController } from './musical-instruments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicalInstrument } from './entities/musical-instrument.entity';
import { Province } from 'src/provinces/entities/province.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MusicalInstrument, Province])],
  controllers: [MusicalInstrumentsController],
  providers: [MusicalInstrumentsService],
})
export class MusicalInstrumentsModule {}

