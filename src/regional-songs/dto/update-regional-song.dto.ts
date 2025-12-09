import { PartialType } from '@nestjs/mapped-types';
import { CreateRegionalSongDto } from './create-regional-song.dto';

export class UpdateRegionalSongDto extends PartialType(CreateRegionalSongDto) {}

