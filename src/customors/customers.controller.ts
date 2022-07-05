import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getAll() {
    return this.customersService.getAllCustomers();
  }

  @Get(':id')
  findCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customors = this.customersService.findCustomerById(id);

    if (customors) return customors;
    else throw new HttpException('Customer Not Found!', HttpStatus.NOT_FOUND);
  }

  @Post('create')
  createCustomer() {}
}
