import { Module } from '@nestjs/common';
import { apiInfoController, UserController } from './controllers'
import { apiInfoService, UserService } from './services';

@Module({
  imports: [],
  controllers: [apiInfoController, UserController],
  providers: [apiInfoService, UserService],
})
export class AppModule {}
