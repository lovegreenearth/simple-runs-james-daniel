import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  BadRequestException,
  HttpException,
  ValidationPipe,
} from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';
import { QueryFailedExceptionFilter } from './exception/http-exception.filter.filter';
import * as cookieParser from 'cookie-parser';
import { ValidationFilter } from './exception/validation-exception.filter';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  dotenv.config({ path: path.resolve(__dirname, '../.env') });

  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(cookieParser());
  //use validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      stopAtFirstError: true,
      skipMissingProperties: true,
      skipNullProperties: true,
      exceptionFactory: ValidationFilter,
    }),
  );
  app.useGlobalFilters(new QueryFailedExceptionFilter());

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Plan_Share Api')
    .setDescription(``)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'Plan-Share',
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });

  await app.listen(process.env.PORT || 3003);
}
bootstrap();
