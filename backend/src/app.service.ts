import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private tester: any = [{ message: 'Bonjour la mond' }];
  getHello(): any {
    return this.tester[0];
  }
}
