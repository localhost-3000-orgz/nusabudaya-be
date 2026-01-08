import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

let cachedServer;

export default async function handler(req, res) {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
      }),
    );

    app.use(cookieParser());

    app.enableCors({
      origin: [
        'http://localhost:3000', 
        'http://localhost:3001',
        'https://nusabudaya.vercel.app',
        'https://nusabudaya.id',
      ],
      credentials: true
    });

    await app.init();
    cachedServer = app.getHttpAdapter().getInstance();
  }

  return cachedServer(req, res);
}
