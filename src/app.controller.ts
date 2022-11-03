import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';
import { UserService } from './domains/user/services/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test/:email')
  async getTest(@Param('email') email: string) {
    await this.userService.create(email);
  }
}
