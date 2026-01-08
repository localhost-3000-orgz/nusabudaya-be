import { Body, Controller, Header, HttpException, HttpStatus, ParseFilePipeBuilder, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AiService } from './ai.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ResponseHelper } from '../common/helpers/response.helper';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('lens')
  @UseInterceptors(FileInterceptor('image'))
  async scanCulture(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new HttpException(
        ResponseHelper.error(
          null, 
          'File gambar wajib diupload!', 
          HttpStatus.BAD_REQUEST
        ),
        HttpStatus.BAD_REQUEST
      );
    }

    const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new HttpException(
        ResponseHelper.error(
          null,
          `Format file '${file.mimetype}' tidak didukung. Harap upload JPG, PNG, atau WEBP.`,
          HttpStatus.UNPROCESSABLE_ENTITY
        ),
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new HttpException(
        ResponseHelper.error(
          null,
          `Ukuran file terlalu besar (${(file.size / 1024 / 1024).toFixed(2)} MB). Maksimal 5MB.`,
          HttpStatus.PAYLOAD_TOO_LARGE
        ),
        HttpStatus.PAYLOAD_TOO_LARGE
      );
    }

    try {
      const result = await this.aiService.analyzeImage(file);

      return ResponseHelper.success(
        result,
        "Analisis Nusa Lens berhasil",
        HttpStatus.OK
      );

    } catch (error) {
      throw new HttpException(
        ResponseHelper.error(
          null,
          error.message || 'Terjadi kesalahan saat analisis AI',
          HttpStatus.INTERNAL_SERVER_ERROR
        ),
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Post('batik')
  @UseInterceptors(FileInterceptor('image'))
  async generateBatik(@UploadedFile() file: Express.Multer.File, @Body('deskripsi') deskripsi: string) {
    if (!file) {
      throw new HttpException(
        ResponseHelper.error(
          null, 
          'Gambar batik wajib diupload!', 
          HttpStatus.BAD_REQUEST
        ),
        HttpStatus.BAD_REQUEST
      );
    }

    const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new HttpException(
        ResponseHelper.error(
          null,
          `Format file '${file.mimetype}' tidak didukung. Harap upload JPG, PNG, atau WEBP.`,
          HttpStatus.UNPROCESSABLE_ENTITY
        ),
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new HttpException(
        ResponseHelper.error(
          null,
          `Ukuran file terlalu besar (${(file.size / 1024 / 1024).toFixed(2)} MB). Maksimal 5MB.`,
          HttpStatus.PAYLOAD_TOO_LARGE
        ),
        HttpStatus.PAYLOAD_TOO_LARGE
      );
    }

    if (!deskripsi) deskripsi = "Buat pola batik yang indah dan estetik";

    try {
      const result = await this.aiService.generateBatik(file, deskripsi);

      return ResponseHelper.success(
        result,
        "Batik baru berhasil dibuat",
        HttpStatus.OK
      );

    } catch (error) {
      throw new HttpException(
        ResponseHelper.error(
          null,
          error.message || 'Terjadi kesalahan saat membuat Batik',
          HttpStatus.INTERNAL_SERVER_ERROR
        ),
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
