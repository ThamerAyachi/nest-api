import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customors/customers.module';
import entities from './typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    CustomersModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'basxx1rmhng3swzpu2ol-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'uir1the7ewe3ixrz',
      password: 'tEygToo6zHvyjEwoIaCd',
      database: 'basxx1rmhng3swzpu2ol',
      entities: entities,
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    AuthModule,
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
