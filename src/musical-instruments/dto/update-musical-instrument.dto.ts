import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicalInstrumentDto } from './create-musical-instrument.dto';

export class UpdateMusicalInstrumentDto extends PartialType(CreateMusicalInstrumentDto) {}

