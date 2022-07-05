import { Module } from '@nestjs/common';
import { CustomorsController } from './customors.controller';
import { CustomorsService } from './customors.service';

@Module({
  controllers: [CustomorsController],
  providers: [CustomorsService],
})
export class CustomorsModule {}
