import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { ValidateCustomerAccountMiddleware } from './middlewares/ValidateCustomerAccount.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    /* 
      ? or for all routes in customer controller use :
      consumer.apply(ValidateCustomerMiddleware).forRoutes(CustomersController);
      ? and use exclude :
      consumer.apply(ValidateCustomerMiddleware)
      .exclude({
        path: '/customer/:id',
        method: RequestMethod.GET,
      })
      .forRoutes(CustomersController);
    */
    consumer.apply(ValidateCustomerAccountMiddleware).forRoutes(
      {
        path: '/customers/:id',
        method: RequestMethod.GET,
      },
      {
        path: '/customers/create',
        method: RequestMethod.POST,
      },
    );
  }
}
