import { Controller, Get, Param } from '@nestjs/common';

@Controller('test')
export class apiInfoController {

    @Get('ola')
    getOla(): string {
        const msg: string = 'ola mundo';
        return msg;
    }

    @Get('say/:something')
    getTest(@Param('something') word: string): string {
        console.log('passei aquie');
        return word;
    }

}