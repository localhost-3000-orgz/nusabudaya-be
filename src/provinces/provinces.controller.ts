import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { ResponseHelper } from '../common/helpers/response.helper';

@Controller('provinces')
export class ProvincesController {
  constructor(private readonly provincesService: ProvincesService) {}

  @Post()
  async create(@Body() createProvinceDto: CreateProvinceDto) {
    const province = await this.provincesService.create(createProvinceDto);
    return ResponseHelper.success(province, "Province created successfully", HttpStatus.CREATED);
  }

  @Get()
  async findAll() {
    const provinces = await this.provincesService.findAll();
    return ResponseHelper.success(provinces, "Provinces fetched successfully", HttpStatus.OK);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const province = await this.provincesService.findOne(+id);
    return ResponseHelper.success(province, "Province fetched successfully", HttpStatus.OK);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProvinceDto: UpdateProvinceDto) {
    const updatedProvince = await this.provincesService.update(+id, updateProvinceDto);
    return ResponseHelper.success(updatedProvince, "Province updated successfully", HttpStatus.OK);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.provincesService.remove(+id);
    return ResponseHelper.success(null, "Province removed successfully", HttpStatus.OK);
  }
}
