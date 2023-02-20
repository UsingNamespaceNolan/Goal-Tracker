import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private tester: any = [{ message: 'Hello World' }];
  getHello(): any {
    return this.tester[0];
  }
}
