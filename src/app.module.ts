import { Module } from '@nestjs/common';
import { CustomorsModule } from './customors/customors.module';

@Module({
  imports: [CustomorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
