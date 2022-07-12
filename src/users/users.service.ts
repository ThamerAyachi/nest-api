import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/typeorm/User';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';
import { User } from './User';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private Users: User[] = [];

  getUsers() {
    // return this.Users.map((user) => new SerializedUser(user));
    const Users = this.userRepository.find();
    return Users;
  }

  getUserByUsername(username: string) {
    return this.Users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.Users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    const password = encodePassword(createUserDto.password);
    const newUser = this.userRepository.create({ ...createUserDto, password });

    return this.userRepository.save(newUser);
  }
}
