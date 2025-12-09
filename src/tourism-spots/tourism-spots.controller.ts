import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { TourismSpotsService } from './tourism-spots.service';
import { CreateTourismSpotDto } from './dto/create-tourism-spot.dto';
import { UpdateTourismSpotDto } from './dto/update-tourism-spot.dto';
import { ResponseHelper } from 'src/common/helpers/response.helper';

@Controller('tourism-spots')
export class TourismSpotsController {
  constructor(private readonly tourismSpotsService: TourismSpotsService) {}

  @Post()
  async create(@Body() createTourismSpotDto: CreateTourismSpotDto) {
    const tourismSpot = await this.tourismSpotsService.create(createTourismSpotDto);
    return ResponseHelper.success(tourismSpot, "Tourism spot created successfully", HttpStatus.CREATED);
  }

  @Get()
  async findAll(@Query('province_id') provinceId?: string) {
    if (provinceId) {
      const tourismSpots = await this.tourismSpotsService.findByProvince(+provinceId);
      return ResponseHelper.success(tourismSpots, "Tourism spots fetched successfully", HttpStatus.OK);
    }
    const tourismSpots = await this.tourismSpotsService.findAll();
    return ResponseHelper.success(tourismSpots, "Tourism spots fetched successfully", HttpStatus.OK);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const tourismSpot = await this.tourismSpotsService.findOne(+id);
    return ResponseHelper.success(tourismSpot, "Tourism spot fetched successfully", HttpStatus.OK);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTourismSpotDto: UpdateTourismSpotDto) {
    const updatedTourismSpot = await this.tourismSpotsService.update(+id, updateTourismSpotDto);
    return ResponseHelper.success(updatedTourismSpot, "Tourism spot updated successfully", HttpStatus.OK);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.tourismSpotsService.remove(+id);
    return ResponseHelper.success(null, "Tourism spot removed successfully", HttpStatus.OK);
  }
}

