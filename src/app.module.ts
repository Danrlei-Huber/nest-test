import { Module } from '@nestjs/common';
import { apiInfoController } from './controllers'
import { apiInfoService } from './services';

@Module({
  imports: [],
  controllers: [apiInfoController],
  providers: [apiInfoService],
})
export class AppModule {}
