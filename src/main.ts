import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

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
  
  if (process.env.VERCEL) {
    await app.init();
    // Return instance Express agar bisa di-handle oleh Vercel
    const expressApp = app.getHttpAdapter().getInstance();
    return expressApp;
  } else {
    // Jika di local, jalankan server seperti biasa
    await app.listen(process.env.PORT ?? 3000);
  }
}

bootstrap();

