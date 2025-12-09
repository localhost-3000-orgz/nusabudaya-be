import { Module } from '@nestjs/common';
import { CulinariesService } from './culinaries.service';
import { CulinariesController } from './culinaries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Culinary } from './entities/culinary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Culinary])],
  controllers: [CulinariesController],
  providers: [CulinariesService],
})
export class CulinariesModule {}

