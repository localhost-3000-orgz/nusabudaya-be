import { IsNotEmpty, IsNumber, IsString, IsOptional, IsUrl } from "class-validator";

export class CreateTraditionalDanceDto {
  @IsNotEmpty()
  @IsNumber()
  province_id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsUrl()
  video_url?: string;
}

