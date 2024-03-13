import { Controller, Get, Param } from '@nestjs/common';
import { ResponseDTO } from 'src/domain/requestDTO';
import { apiInfoService } from 'src/services';


@Controller('test')
export class apiInfoController {

  constructor(private readonly service: apiInfoService){}

  @Get()
  getHello(): ResponseDTO {
    return this.service.ola();
  }
  
  @Get()
  getOlla(): string {
    const msg: string = 'ola mundo';
    return msg;
  }

  @Get('say/:something')
  getTest(@Param('something') word: string): string {
    return word;
  }

}