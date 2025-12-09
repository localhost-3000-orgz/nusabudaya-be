import { PartialType } from '@nestjs/mapped-types';
import { CreateTraditionalDanceDto } from './create-traditional-dance.dto';

export class UpdateTraditionalDanceDto extends PartialType(CreateTraditionalDanceDto) {}

