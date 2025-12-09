import { Module } from '@nestjs/common';
import { TraditionalWeaponsService } from './traditional-weapons.service';
import { TraditionalWeaponsController } from './traditional-weapons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraditionalWeapon } from './entities/traditional-weapon.entity';
import { Province } from 'src/provinces/entities/province.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TraditionalWeapon, Province])],
  controllers: [TraditionalWeaponsController],
  providers: [TraditionalWeaponsService],
})
export class TraditionalWeaponsModule {}

