import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomorsService {
  private users = [
    {
      id: 1,
      email: 'user1@email.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'user2@email.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'user3@email.com',
      createdAt: new Date(),
    },
  ];

  getAllCustomors() {
    return this.users;
  }

  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
