import { Controller, Get, Post, Body, Param, Delete, HttpStatus, UseGuards, Req } from '@nestjs/common';
import { GameResultsService } from './game-results.service';
import { CreateGameResultDto } from './dto/create-game-result.dto';
import { ResponseHelper } from '../common/helpers/response.helper';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('game-results')
@UseGuards(JwtAuthGuard)
export class GameResultsController {
  constructor(private readonly gameResultsService: GameResultsService) {}

  @Post()
  async create(@Body() createGameResultDto: CreateGameResultDto, @Req() req) {
    const userId = req.user.id;
    const gameResult = await this.gameResultsService.create(createGameResultDto, userId);
    return ResponseHelper.success(
      gameResult,
      "Game result created successfully",
      HttpStatus.CREATED
    );
  }

  @Get()
  async findAll(@Req() req) {
    const userId = req.user.id;
    const { type, province_id } = req.query;

    const provinceIdNum = province_id !== undefined ? Number(province_id) : undefined;

    const gameResults = await this.gameResultsService.findAllByUserId(
      userId,
      type,
      provinceIdNum
    );
    return ResponseHelper.success(
      gameResults,
      "Game results fetched successfully",
      HttpStatus.OK
    );
  }

  @Get('global')
  async findGlobal() {
    const leaderboard = await this.gameResultsService.findGlobal();
    return ResponseHelper.success(
      leaderboard,
      "Leaderboard global fetch successfully",
      HttpStatus.OK,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const gameResult = await this.gameResultsService.findOne(+id);
    return ResponseHelper.success(
      gameResult,
      "Game result fetched successfully",
      HttpStatus.OK
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.gameResultsService.remove(+id);
    return ResponseHelper.success(
      result,
      "Game result deleted successfully",
      HttpStatus.OK
    );
  }
}
