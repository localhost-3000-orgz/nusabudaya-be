import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { TraditionalWeaponsService } from './traditional-weapons.service';
import { CreateTraditionalWeaponDto } from './dto/create-traditional-weapon.dto';
import { UpdateTraditionalWeaponDto } from './dto/update-traditional-weapon.dto';
import { ResponseHelper } from '../common/helpers/response.helper';

@Controller('traditional-weapons')
export class TraditionalWeaponsController {
  constructor(private readonly traditionalWeaponsService: TraditionalWeaponsService) {}

  @Post()
  async create(@Body() createTraditionalWeaponDto: CreateTraditionalWeaponDto) {
    const traditionalWeapon = await this.traditionalWeaponsService.create(createTraditionalWeaponDto);
    return ResponseHelper.success(traditionalWeapon, "Traditional weapon created successfully", HttpStatus.CREATED);
  }

  @Get()
  async findAll(@Query('province_id') provinceId?: string) {
    if (provinceId) {
      const traditionalWeapons = await this.traditionalWeaponsService.findByProvince(+provinceId);
      return ResponseHelper.success(traditionalWeapons, "Traditional weapons fetched successfully", HttpStatus.OK);
    }
    const traditionalWeapons = await this.traditionalWeaponsService.findAll();
    return ResponseHelper.success(traditionalWeapons, "Traditional weapons fetched successfully", HttpStatus.OK);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const traditionalWeapon = await this.traditionalWeaponsService.findOne(+id);
    return ResponseHelper.success(traditionalWeapon, "Traditional weapon fetched successfully", HttpStatus.OK);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTraditionalWeaponDto: UpdateTraditionalWeaponDto) {
    const updatedTraditionalWeapon = await this.traditionalWeaponsService.update(+id, updateTraditionalWeaponDto);
    return ResponseHelper.success(updatedTraditionalWeapon, "Traditional weapon updated successfully", HttpStatus.OK);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.traditionalWeaponsService.remove(+id);
    return ResponseHelper.success(null, "Traditional weapon removed successfully", HttpStatus.OK);
  }
}

