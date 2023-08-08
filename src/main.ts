import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { LoggingInterceptor } from './vendors/interceptor/login.interceptor';
import { HttpExceptionFilter } from './vendors/filters/http-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();
  app.get(ConfigService);
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(cookieParser());
  app.enableCors({
    credentials: true
  })
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  await app.listen(3000);
}
bootstrap();
