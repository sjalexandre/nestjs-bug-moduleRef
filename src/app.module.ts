import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloService } from './hello.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, HelloService],
})
export class AppModule {}
