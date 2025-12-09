import { IsNotEmpty, IsNumber, IsString, IsOptional, IsUrl } from "class-validator";

export class CreateTraditionalWeaponDto {
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
  image_url?: string;
}
