import {
  Controller,
  Get,
  Post,
  Request,
  Session,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  async login(@Request() req) {}

  @Get('')
  async getAuthSession(@Session() session: Record<string, any>) {
    session.authenticated = true;
    return session;
  }
}
