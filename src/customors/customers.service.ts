import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customors/CreateCustomer.dto';
import { Customer } from './Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'user1@email.com',
      name: 'Adam Adam',
    },
    {
      id: 2,
      email: 'user2@email.com',
      name: 'Danny Danny',
    },
    {
      id: 3,
      email: 'user3@email.com',
      name: 'Alex Alex',
    },
  ];

  getAllCustomers() {
    return this.customers;
  }

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
    return customerDto;
  }
}
