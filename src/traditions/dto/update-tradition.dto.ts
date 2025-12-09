import { PartialType } from '@nestjs/mapped-types';
import { CreateTraditionDto } from './create-tradition.dto';

export class UpdateTraditionDto extends PartialType(CreateTraditionDto) {}

