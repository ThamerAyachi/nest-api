import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(
    session({
      name: 'NESTJS_SESSION_ID',
      secret: process.env.SECRET_WORD,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000, // 1min | 1000 = 1s
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
