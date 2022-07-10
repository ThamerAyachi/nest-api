import { Injectable } from '@nestjs/common';
import { SerializedUser } from './SerializedUser';
import { User } from './User';

@Injectable()
export class UsersService {
  private Users: User[] = [
    {
      id: 1,
      username: 'ancon',
      password: '123',
    },
    {
      id: 2,
      username: 'adam',
      password: '123',
    },
    {
      id: 3,
      username: 'alex',
      password: '123',
    },
  ];

  getUsers() {
    return this.Users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.Users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.Users.find((user) => user.id === id);
  }
}
