import { IsNotEmpty, IsNumber, IsString, IsOptional, IsUrl } from "class-validator";

export class CreateRegionalSongDto {
  @IsNotEmpty()
  @IsNumber()
  province_id: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  lyrics?: string;

  @IsOptional()
  @IsUrl()
  audio_url?: string;
}

