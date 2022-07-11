import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/typeorm/User';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';
import { SerializedUser } from './SerializedUser';
import { User } from './User';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  private Users: User[] = [];

  getUsers() {
    return this.Users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.Users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.Users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);

    return this.userRepository.save(newUser);
  }
}
