import { Module } from '@nestjs/common';
import { ItemsController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [AppService],
})
export class AppModule {}
