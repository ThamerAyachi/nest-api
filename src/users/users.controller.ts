import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserNotFoundException } from './exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from './filters/HttpException.filter';
import { SerializedUser } from './SerializedUser';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  @UseInterceptors(ClassSerializerInterceptor)
  getUsers() {
    const users = this.usersService.getUsers();
    // if (users === []) {
    //   throw new HttpException('Users is null', HttpStatus.BAD_REQUEST);
    // } else return users;
    return users;
  }

  @Get('/username/:username')
  @UseInterceptors(ClassSerializerInterceptor)
  getUserByUsername(@Param('username') username: string) {
    const user = this.usersService.getUserByUsername(username);

    if (user) return new SerializedUser(user);
    else throw new HttpException('User Not Found!', HttpStatus.NOT_FOUND);
  }

  @Get('/id/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.usersService.getUserById(id);

    if (user) return new SerializedUser(user);
    else throw new UserNotFoundException();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
