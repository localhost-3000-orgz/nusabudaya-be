import { IsEnum, IsInt, IsBoolean, IsNotEmpty, IsUUID, IsNumber } from 'class-validator';
import { GameType } from '../entities/game-result.entity';

export class CreateGameResultDto {
  @IsNumber()
  @IsNotEmpty()
  provinceId: number;

  @IsEnum(GameType)
  @IsNotEmpty()
  type: GameType;

  @IsInt()
  @IsNotEmpty()
  xp: number;

  @IsInt()
  @IsNotEmpty()
  time: number; // in seconds

  @IsBoolean()
  is_complete?: boolean;
}
