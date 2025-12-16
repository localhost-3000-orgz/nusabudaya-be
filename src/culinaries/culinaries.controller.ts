import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { CulinariesService } from './culinaries.service';
import { CreateCulinaryDto } from './dto/create-culinary.dto';
import { UpdateCulinaryDto } from './dto/update-culinary.dto';
import { ResponseHelper } from '../common/helpers/response.helper';

@Controller('culinaries')
export class CulinariesController {
  constructor(private readonly culinariesService: CulinariesService) {}

  @Post()
  async create(@Body() createCulinaryDto: CreateCulinaryDto) {
    const culinary = await this.culinariesService.create(createCulinaryDto);
    return ResponseHelper.success(culinary, "Culinary created successfully", HttpStatus.CREATED);
  }

  @Get()
  async findAll(@Query('province_id') provinceId?: string) {
    if (provinceId) {
      const culinaries = await this.culinariesService.findByProvince(+provinceId);
      return ResponseHelper.success(culinaries, "Culinaries fetched successfully", HttpStatus.OK);
    }
    const culinaries = await this.culinariesService.findAll();
    return ResponseHelper.success(culinaries, "Culinaries fetched successfully", HttpStatus.OK);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const culinary = await this.culinariesService.findOne(+id);
    return ResponseHelper.success(culinary, "Culinary fetched successfully", HttpStatus.OK);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCulinaryDto: UpdateCulinaryDto) {
    const updatedCulinary = await this.culinariesService.update(+id, updateCulinaryDto);
    return ResponseHelper.success(updatedCulinary, "Culinary updated successfully", HttpStatus.OK);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.culinariesService.remove(+id);
    return ResponseHelper.success(null, "Culinary removed successfully", HttpStatus.OK);
  }
}

