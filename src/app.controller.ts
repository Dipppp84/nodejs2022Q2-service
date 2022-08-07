import { Controller, Request, UseGuards, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller()
@UseGuards(JwtAuthGuard)
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(@Request() req): string {
    return this.appService.getHello();
  }
}
