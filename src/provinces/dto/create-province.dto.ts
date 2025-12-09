import { IsNotEmpty, IsNumber, IsString, IsDate, IsOptional, IsUrl, Min } from "class-validator";

export class CreateProvinceDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  capital_city: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  area_km2: number;

  @IsOptional()
  @IsDate()
  anniversary_date?: Date;

  @IsOptional()
  @IsUrl()
  icon_url?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
