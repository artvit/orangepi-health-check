import { Controller, Get } from '@nestjs/common';
import { SystemInformationService } from './system-information.service';
import { CurrentStatus } from './model/current-status';
import { SystemInfo } from './model/system-info';

@Controller()
export class AppController {
  constructor(private readonly systemInformationService: SystemInformationService) {}

  @Get('/status')
  async getStatus(): Promise<CurrentStatus> {
    return await this.systemInformationService.getCurrentStatus();
  }

  @Get('/sys-info')
  async getSystemInfo(): Promise<SystemInfo> {
    return await this.systemInformationService.getSystemInfo();
  }
}
