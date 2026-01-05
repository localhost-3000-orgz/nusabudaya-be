import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ====== Global Pipes & Filters ======
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
    ],
    credentials: true
  });

  await app.listen(process.env.PORT ?? 3000);
}

export default bootstrap();

