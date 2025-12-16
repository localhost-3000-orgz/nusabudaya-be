import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { TraditionsService } from './traditions.service';
import { CreateTraditionDto } from './dto/create-tradition.dto';
import { UpdateTraditionDto } from './dto/update-tradition.dto';
import { ResponseHelper } from '../common/helpers/response.helper';

@Controller('traditions')
export class TraditionsController {
  constructor(private readonly traditionsService: TraditionsService) {}

  @Post()
  async create(@Body() createTraditionDto: CreateTraditionDto) {
    const tradition = await this.traditionsService.create(createTraditionDto);
    return ResponseHelper.success(tradition, "Tradition created successfully", HttpStatus.CREATED);
  }

  @Get()
  async findAll(@Query('province_id') provinceId?: string) {
    if (provinceId) {
      const traditions = await this.traditionsService.findByProvince(+provinceId);
      return ResponseHelper.success(traditions, "Traditions fetched successfully", HttpStatus.OK);
    }
    const traditions = await this.traditionsService.findAll();
    return ResponseHelper.success(traditions, "Traditions fetched successfully", HttpStatus.OK);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const tradition = await this.traditionsService.findOne(+id);
    return ResponseHelper.success(tradition, "Tradition fetched successfully", HttpStatus.OK);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTraditionDto: UpdateTraditionDto) {
    const updatedTradition = await this.traditionsService.update(+id, updateTraditionDto);
    return ResponseHelper.success(updatedTradition, "Tradition updated successfully", HttpStatus.OK);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.traditionsService.remove(+id);
    return ResponseHelper.success(null, "Tradition removed successfully", HttpStatus.OK);
  }
}

