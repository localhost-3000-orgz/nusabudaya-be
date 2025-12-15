import { Controller, HttpStatus, ParseFilePipeBuilder, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AiService } from './ai.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ResponseHelper } from 'src/common/helpers/response.helper';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('lens')
  @UseInterceptors(FileInterceptor('image'))

  async scanCulture(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /(jpg|jpeg|png|webp)$/,
        })
        .addMaxSizeValidator({
          maxSize: 10 * 1024 * 1024
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        })
    )
    file: Express.Multer.File,
  ) {
    const result = await this.aiService.analyzeImage(file);

    return ResponseHelper.success(
      result,
      "Analisis Nusa Lens berhasil",
      HttpStatus.OK
    );
  }
}
