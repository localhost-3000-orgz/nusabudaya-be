import { PartialType } from '@nestjs/mapped-types';
import { CreateTraditionalWeaponDto } from './create-traditional-weapon.dto';

export class UpdateTraditionalWeaponDto extends PartialType(CreateTraditionalWeaponDto) {}

