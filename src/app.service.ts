import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { HelloService } from './hello.service';

@Injectable()
export class AppService {
  private helloService: HelloService;

  constructor(private readonly moduleRef: ModuleRef) {}

  onModuleInit() {
    // this.helloService = this.moduleRef.get(HelloService);
    this.helloService = this.moduleRef.get('HelloService');
  }

  getHello(): string {
    return this.helloService.getHello();
  }
}
