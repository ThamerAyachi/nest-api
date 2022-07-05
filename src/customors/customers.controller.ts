import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  HttpException,
  HttpStatus,
  Post,
  Body,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from 'src/customors/CreateCustomer.dto';

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
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.createCustomer(createCustomerDto);
  }
}
