import { Module } from '@nestjs/common';
import { TraditionsService } from './traditions.service';
import { TraditionsController } from './traditions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tradition } from './entities/tradition.entity';
import { Province } from 'src/provinces/entities/province.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tradition, Province])],
  controllers: [TraditionsController],
  providers: [TraditionsService],
})
export class TraditionsModule {}

