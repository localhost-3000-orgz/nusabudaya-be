import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { TraditionalHousesService } from './traditional-houses.service';
import { CreateTraditionalHouseDto } from './dto/create-traditional-house.dto';
import { UpdateTraditionalHouseDto } from './dto/update-traditional-house.dto';
import { ResponseHelper } from '../common/helpers/response.helper';

@Controller('traditional-houses')
export class TraditionalHousesController {
  constructor(private readonly traditionalHousesService: TraditionalHousesService) {}

  @Post()
  async create(@Body() createTraditionalHouseDto: CreateTraditionalHouseDto) {
    const traditionalHouse = await this.traditionalHousesService.create(createTraditionalHouseDto);
    return ResponseHelper.success(traditionalHouse, "Traditional house created successfully", HttpStatus.CREATED);
  }

  @Get()
  async findAll(@Query('province_id') provinceId?: string) {
    if (provinceId) {
      const traditionalHouses = await this.traditionalHousesService.findByProvince(+provinceId);
      return ResponseHelper.success(traditionalHouses, "Traditional houses fetched successfully", HttpStatus.OK);
    }
    const traditionalHouses = await this.traditionalHousesService.findAll();
    return ResponseHelper.success(traditionalHouses, "Traditional houses fetched successfully", HttpStatus.OK);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const traditionalHouse = await this.traditionalHousesService.findOne(+id);
    return ResponseHelper.success(traditionalHouse, "Traditional house fetched successfully", HttpStatus.OK);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTraditionalHouseDto: UpdateTraditionalHouseDto) {
    const updatedTraditionalHouse = await this.traditionalHousesService.update(+id, updateTraditionalHouseDto);
    return ResponseHelper.success(updatedTraditionalHouse, "Traditional house updated successfully", HttpStatus.OK);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.traditionalHousesService.remove(+id);
    return ResponseHelper.success(null, "Traditional house removed successfully", HttpStatus.OK);
  }
}

