import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { ResponseHelper } from '../common/helpers/response.helper';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post()
  async create(@Body() createQuizDto: CreateQuizDto) {
    const quiz = await this.quizzesService.create(createQuizDto);
    return ResponseHelper.success(quiz, "Quiz created successfully", HttpStatus.CREATED);
  }

  @Get()
  async findAll(@Query('province_id') provinceId?: string) {
    if (provinceId) {
      const quizzes = await this.quizzesService.findByProvince(+provinceId);
      return ResponseHelper.success(quizzes, "Quizzes fetched successfully", HttpStatus.OK);
    }
    const quizzes = await this.quizzesService.findAll();
    return ResponseHelper.success(quizzes, "Quizzes fetched successfully", HttpStatus.OK);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const quiz = await this.quizzesService.findOne(+id);
    return ResponseHelper.success(quiz, `Quiz #${id} fetched successfully`, HttpStatus.OK);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    const updatedQuiz = await this.quizzesService.update(+id, updateQuizDto);
    return ResponseHelper.success(updatedQuiz, `Quiz #${id} updated successfully`, HttpStatus.OK);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.quizzesService.remove(+id);
    return ResponseHelper.success(null, `Quiz #${id} removed successfully`, HttpStatus.OK);
  }
}
