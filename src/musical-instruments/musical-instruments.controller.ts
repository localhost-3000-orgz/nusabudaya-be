import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { MusicalInstrumentsService } from './musical-instruments.service';
import { CreateMusicalInstrumentDto } from './dto/create-musical-instrument.dto';
import { UpdateMusicalInstrumentDto } from './dto/update-musical-instrument.dto';
import { ResponseHelper } from 'src/common/helpers/response.helper';

@Controller('musical-instruments')
export class MusicalInstrumentsController {
  constructor(private readonly musicalInstrumentsService: MusicalInstrumentsService) {}

  @Post()
  async create(@Body() createMusicalInstrumentDto: CreateMusicalInstrumentDto) {
    const musicalInstrument = await this.musicalInstrumentsService.create(createMusicalInstrumentDto);
    return ResponseHelper.success(musicalInstrument, "Musical instrument created successfully", HttpStatus.CREATED);
  }

  @Get()
  async findAll(@Query('province_id') provinceId?: string) {
    if (provinceId) {
      const musicalInstruments = await this.musicalInstrumentsService.findByProvince(+provinceId);
      return ResponseHelper.success(musicalInstruments, "Musical instruments fetched successfully", HttpStatus.OK);
    }
    const musicalInstruments = await this.musicalInstrumentsService.findAll();
    return ResponseHelper.success(musicalInstruments, "Musical instruments fetched successfully", HttpStatus.OK);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const musicalInstrument = await this.musicalInstrumentsService.findOne(+id);
    return ResponseHelper.success(musicalInstrument, "Musical instrument fetched successfully", HttpStatus.OK);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMusicalInstrumentDto: UpdateMusicalInstrumentDto) {
    const updatedMusicalInstrument = await this.musicalInstrumentsService.update(+id, updateMusicalInstrumentDto);
    return ResponseHelper.success(updatedMusicalInstrument, "Musical instrument updated successfully", HttpStatus.OK);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.musicalInstrumentsService.remove(+id);
    return ResponseHelper.success(null, "Musical instrument removed successfully", HttpStatus.OK);
  }
}

