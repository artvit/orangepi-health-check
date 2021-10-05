import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SystemInformationService } from './system-information.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [SystemInformationService],
})
export class AppModule {}
