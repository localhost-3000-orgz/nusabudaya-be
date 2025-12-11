import { IsUUID, IsInt } from 'class-validator';

export class CreateAchievementDto {
  @IsInt()
  provinceId: number;
}
