import { PartialType } from '@nestjs/mapped-types';
import { CreateImageGuessDto } from './create-image-guess.dto';

export class UpdateImageGuessDto extends PartialType(CreateImageGuessDto) {}
