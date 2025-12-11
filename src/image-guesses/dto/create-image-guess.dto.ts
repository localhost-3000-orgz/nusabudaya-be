import { IsString, IsArray, ArrayMinSize, IsNotEmpty } from 'class-validator';

export class CreateImageGuessDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsString()
  @IsNotEmpty()
  image_url: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  choices: string[];

  @IsString()
  @IsNotEmpty()
  answer: string;

  @IsNotEmpty()
  provinceId: number;
}
