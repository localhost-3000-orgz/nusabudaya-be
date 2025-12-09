import { PartialType } from '@nestjs/mapped-types';
import { CreateCulinaryDto } from './create-culinary.dto';

export class UpdateCulinaryDto extends PartialType(CreateCulinaryDto) {}

