import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('payments')
export class PaymentsController {
  @Get()
  getPayment(@Req() req: Request, @Res() res: Response) {
    const { count, page } = req.query;
    if (!count || !page) {
      res
        .status(400)
        .send({ message: 'Missing count or page query parameter' });
    } else {
      res.send(200);
    }
  }
}
