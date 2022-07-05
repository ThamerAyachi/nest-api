import { Module } from '@nestjs/common';
import { CustomersModule } from './customors/customers.module';

@Module({
  imports: [CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
