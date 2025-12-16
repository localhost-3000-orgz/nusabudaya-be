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
  
  app.enableCors();

  if (process.env.VERCEL) {
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    return expressApp;
  } else {
    
    await app.listen(process.env.PORT ?? 3000);
  }
}

export default bootstrap();

