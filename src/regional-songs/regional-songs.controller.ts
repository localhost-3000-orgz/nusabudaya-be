import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { RegionalSongsService } from './regional-songs.service';
import { CreateRegionalSongDto } from './dto/create-regional-song.dto';
import { UpdateRegionalSongDto } from './dto/update-regional-song.dto';
import { ResponseHelper } from 'src/common/helpers/response.helper';

@Controller('regional-songs')
export class RegionalSongsController {
  constructor(private readonly regionalSongsService: RegionalSongsService) {}

  @Post()
  async create(@Body() createRegionalSongDto: CreateRegionalSongDto) {
    const regionalSong = await this.regionalSongsService.create(createRegionalSongDto);
    return ResponseHelper.success(regionalSong, "Regional song created successfully", HttpStatus.CREATED);
  }

  @Get()
  async findAll(@Query('province_id') provinceId?: string) {
    if (provinceId) {
      const regionalSongs = await this.regionalSongsService.findByProvince(+provinceId);
      return ResponseHelper.success(regionalSongs, "Regional songs fetched successfully", HttpStatus.OK);
    }
    const regionalSongs = await this.regionalSongsService.findAll();
    return ResponseHelper.success(regionalSongs, "Regional songs fetched successfully", HttpStatus.OK);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const regionalSong = await this.regionalSongsService.findOne(+id);
    return ResponseHelper.success(regionalSong, "Regional song fetched successfully", HttpStatus.OK);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRegionalSongDto: UpdateRegionalSongDto) {
    const updatedRegionalSong = await this.regionalSongsService.update(+id, updateRegionalSongDto);
    return ResponseHelper.success(updatedRegionalSong, "Regional song updated successfully", HttpStatus.OK);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.regionalSongsService.remove(+id);
    return ResponseHelper.success(null, "Regional song removed successfully", HttpStatus.OK);
  }
}

