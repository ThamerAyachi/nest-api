import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
// import { TypeormStore } from 'connect-typeorm';
// import { getRepository } from 'typeorm';
// import { SessionEntity } from './typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  // const sessionRepository = getRepository(SessionEntity);
  app.use(
    session({
      name: 'NESTJS_SESSION_ID',
      secret: process.env.SECRET_WORD,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000, // 1min | 1000 = 1s
      },
      // store: new TypeormStore().connect(sessionRepository),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
