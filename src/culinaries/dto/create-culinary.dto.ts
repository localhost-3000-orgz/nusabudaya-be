import { IsNotEmpty, IsNumber, IsString, IsOptional, IsUrl, IsEnum } from "class-validator";
import { CulinaryType } from "../entities/culinary.entity";

export class CreateCulinaryDto {
  @IsNotEmpty()
  @IsNumber()
  province_id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(CulinaryType)
  type?: CulinaryType;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsUrl()
  image_url?: string;
}

