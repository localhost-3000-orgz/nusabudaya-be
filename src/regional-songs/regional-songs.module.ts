import { Module } from '@nestjs/common';
import { RegionalSongsService } from './regional-songs.service';
import { RegionalSongsController } from './regional-songs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionalSong } from './entities/regional-song.entity';
import { Province } from 'src/provinces/entities/province.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegionalSong, Province])],
  controllers: [RegionalSongsController],
  providers: [RegionalSongsService],
})
export class RegionalSongsModule {}

