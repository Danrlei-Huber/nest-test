import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const msg : string = 'ola mundo';
    return msg;
  }

    @Get('say/:something')
  getTest(@Param('something') word: string): string {
    console.log('teste de console')
    return word;
  }
}
