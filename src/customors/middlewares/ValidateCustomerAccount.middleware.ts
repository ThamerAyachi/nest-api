/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization)
      throw new HttpException(
        'No Authentication Token Provided!',
        HttpStatus.FORBIDDEN,
      );

    if (authorization === '123') {
      next();
    } else {
      throw new HttpException(
        'No Authentication Token Provided!',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
