import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { TraditionalDancesService } from './traditional-dances.service';
import { CreateTraditionalDanceDto } from './dto/create-traditional-dance.dto';
import { UpdateTraditionalDanceDto } from './dto/update-traditional-dance.dto';
import { ResponseHelper } from 'src/common/helpers/response.helper';

@Controller('traditional-dances')
export class TraditionalDancesController {
  constructor(private readonly traditionalDancesService: TraditionalDancesService) {}

  @Post()
  async create(@Body() createTraditionalDanceDto: CreateTraditionalDanceDto) {
    const traditionalDance = await this.traditionalDancesService.create(createTraditionalDanceDto);
    return ResponseHelper.success(traditionalDance, "Traditional dance created successfully", HttpStatus.CREATED);
  }

  @Get()
  async findAll(@Query('province_id') provinceId?: string) {
    if (provinceId) {
      const traditionalDances = await this.traditionalDancesService.findByProvince(+provinceId);
      return ResponseHelper.success(traditionalDances, "Traditional dances fetched successfully", HttpStatus.OK);
    }
    const traditionalDances = await this.traditionalDancesService.findAll();
    return ResponseHelper.success(traditionalDances, "Traditional dances fetched successfully", HttpStatus.OK);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const traditionalDance = await this.traditionalDancesService.findOne(+id);
    return ResponseHelper.success(traditionalDance, "Traditional dance fetched successfully", HttpStatus.OK);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTraditionalDanceDto: UpdateTraditionalDanceDto) {
    const updatedTraditionalDance = await this.traditionalDancesService.update(+id, updateTraditionalDanceDto);
    return ResponseHelper.success(updatedTraditionalDance, "Traditional dance updated successfully", HttpStatus.OK);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.traditionalDancesService.remove(+id);
    return ResponseHelper.success(null, "Traditional dance removed successfully", HttpStatus.OK);
  }
}

