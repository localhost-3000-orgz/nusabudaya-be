import { IsNotEmpty, IsNumber, IsString, IsOptional, IsUrl } from "class-validator";

export class CreateTourismSpotDto {
  @IsNotEmpty()
  @IsNumber()
  province_id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  location_address?: string;

  @IsOptional()
  @IsString()
  maps_coordinate?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsUrl()
  image_url?: string;
}

