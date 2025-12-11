import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Achievement } from './entities/achievement.entity';
import { User } from 'src/users/entities/user.entity';
import { Province } from 'src/provinces/entities/province.entity';
import { CreateAchievementDto } from './dto/create-achievement.dto';

@Injectable()
export class AchievementsService {
  constructor(
    @InjectRepository(Achievement)
    private achievementRepository: Repository<Achievement>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Province)
    private provinceRepository: Repository<Province>
  ) {}

  async create(createAchievementDto: CreateAchievementDto, userId: string ) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const province = await this.provinceRepository.findOne({ where: { id: createAchievementDto.provinceId } });
    if (!province) {
      throw new NotFoundException('Province not found');
    }

    const achievement = this.achievementRepository.create({
      user,
      province
    });

    return await this.achievementRepository.save(achievement);
  }

  async findAll(userId: string) {
    return await this.achievementRepository.find({
      where: { user: { id: userId } },
      relations: ['province'],
    });
  }

  async findByProvince(provinceId: number, userId: string) {
    return await this.achievementRepository.findOne({
      where: {
        province: { id: provinceId },
        user: { id: userId },
      },
      relations: ['province', 'user'],
    });
  }

  async remove(id: number, userId: string) {
    const achievement = await this.achievementRepository.findOne({
      where: { id, user: { id: userId } },
      relations: ['user'],
    });

    if (!achievement) {
      throw new NotFoundException('Achievement not found');
    }

    await this.achievementRepository.remove(achievement);
    return { message: 'Achievement removed successfully' };
  }
}
