import { PartialType } from '@nestjs/mapped-types';
import { CreateTourismSpotDto } from './create-tourism-spot.dto';

export class UpdateTourismSpotDto extends PartialType(CreateTourismSpotDto) {}

