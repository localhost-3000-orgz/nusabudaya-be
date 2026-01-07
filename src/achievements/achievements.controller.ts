import { Controller, Get, Post, Body, Req, UseGuards, HttpStatus, Delete } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ResponseHelper } from '../common/helpers/response.helper';

@Controller('achievements')
@UseGuards(JwtAuthGuard)
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @Post()
  async create(
    @Body() createAchievementDto: CreateAchievementDto,
    @Req() req: any,
  ) {
    const userId = req.user.id;
    const achievement = await this.achievementsService.create(createAchievementDto, userId);
    return ResponseHelper.success(
      achievement,
      "Achievement created successfully",
      HttpStatus.CREATED
    );
  }

  @Get()
  async findByUser(@Req() req: any) {
    const userId = req.user.id;
    const achievements = await this.achievementsService.findByUser(userId);
    return ResponseHelper.success(
      achievements,
      "Achievements fetched successfully"
    );
  }

  @Get('/all')
  async findAll(@Req() req: any) {
    const userId = req.user.id;
    const provinceId = req.query.province_id ? Number(req.query.province_id) : undefined;
    const achievements = await this.achievementsService.findAll(provinceId, userId);

    return ResponseHelper.success(
      achievements,
      "Achievements fetched successfully"
    );
  }

  @Delete(':id')
  async remove(@Req() req: any, @Body('id') id: number) {
    const userId = req.user.id;
    const result = await this.achievementsService.remove(id, userId);
    return ResponseHelper.success(
      result,
      "Achievement removed successfully"
    );
  }
}
