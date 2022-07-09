/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Hello, World. I am inside ValidateCustomerMiddleware!');
    const { authorization } = req.headers;
    if (!authorization)
      throw new HttpException(
        'No Authentication Token Provided!',
        HttpStatus.FORBIDDEN,
      );
    next();
  }
}
