import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Insightric Auth Service')
    .setDescription('Authentication microservice')
    .setVersion('0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('app.port') || 3000;
  await app.listen(port);
  Logger.log(`API is running on http://localhost:${port}/api`);
  Logger.log(`Swagger docs available at http://localhost:${port}/api/docs`);
  Logger.log(`Health check at http://localhost:${port}/api/health`);
}

bootstrap();
