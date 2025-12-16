import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  HttpStatus
} from '@nestjs/common';
import { ImageGuessesService } from './image-guesses.service';
import { CreateImageGuessDto } from './dto/create-image-guess.dto';
import { UpdateImageGuessDto } from './dto/update-image-guess.dto';
import { ResponseHelper } from '../common/helpers/response.helper';

@Controller('image-guesses')
export class ImageGuessesController {
  constructor(private readonly imageGuessesService: ImageGuessesService) {}

  @Post()
  async create(@Body() createImageGuessDto: CreateImageGuessDto) {
    const imageGuess = await this.imageGuessesService.create(createImageGuessDto);
    return ResponseHelper.success(imageGuess, "Image Guess created successfully", HttpStatus.CREATED);
  }

  @Get()
  async findAll(@Query('provinceId') provinceId?: number) {
    if (provinceId) {
      const imageGuesses = await this.imageGuessesService.findAllByProvince(Number(provinceId));
      return ResponseHelper.success(imageGuesses, "Image Guesses fetched successfully", HttpStatus.OK);
    }
    const imageGuesses = await this.imageGuessesService.findAll();
    return ResponseHelper.success(imageGuesses, "Image Guesses fetched successfully", HttpStatus.OK);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const imageGuess = await this.imageGuessesService.findOne(id);
    return ResponseHelper.success(imageGuess, `Image Guess #${id} fetched successfully`, HttpStatus.OK);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateImageGuessDto: UpdateImageGuessDto,
  ) {
    const updatedImageGuess = await this.imageGuessesService.update(id, updateImageGuessDto);
    return ResponseHelper.success(updatedImageGuess, `Image Guess #${id} updated successfully`, HttpStatus.OK);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.imageGuessesService.remove(id);
    return ResponseHelper.success(null, `Image Guess #${id} removed successfully`, HttpStatus.OK);
  }
}
