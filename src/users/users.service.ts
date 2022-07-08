import { Injectable } from '@nestjs/common';
import { SerializedUser } from './SerializedUser';
import { User } from './User';

@Injectable()
export class UsersService {
  private Users: User[] = [
    {
      username: 'anson',
      password: '123',
    },
    {
      username: 'adam',
      password: '123',
    },
    {
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
}
