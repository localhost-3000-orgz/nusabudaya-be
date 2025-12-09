import { IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

export class CreateTraditionDto {
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
  @IsString()
  event_date?: string;
}

