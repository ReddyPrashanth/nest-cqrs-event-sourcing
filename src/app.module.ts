import { Module } from '@nestjs/common';
import { AdminunitsModule } from './adminunits/adminunits.module';

@Module({
  imports: [AdminunitsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
