import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CustomorsService } from './customors.service';

@Controller('customors')
export class CustomorsController {
  constructor(private customorsService: CustomorsService) {}

  @Get()
  getAll() {
    return this.customorsService.getAllCustomors();
  }

  @Get(':id')
  findCustomorById(@Param('id', ParseIntPipe) id: number) {
    const customors = this.customorsService.findCustomerById(id);

    if (customors) return customors;
    else throw new HttpException('Customer Not Found!', HttpStatus.NOT_FOUND);
  }
}
