import { Module } from '@nestjs/common';
import { ImageGuessesService } from './image-guesses.service';
import { ImageGuessesController } from './image-guesses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageGuess } from './entities/image-guess.entity';
import { Province } from 'src/provinces/entities/province.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImageGuess, Province])],
  controllers: [ImageGuessesController],
  providers: [ImageGuessesService],
})
export class ImageGuessesModule {}
