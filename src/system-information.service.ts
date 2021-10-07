import { Injectable } from '@nestjs/common';
import * as si from 'systeminformation';
import { CurrentStatus} from './model/current-status';
import { SystemInfo } from './model/system-info';

@Injectable()
export class SystemInformationService {
  async getCurrentStatus(): Promise<CurrentStatus> {
    const { cores: coresSpeed } = await si.cpuCurrentSpeed();
    const { main: temperature } = await si.cpuTemperature();
    const { total, free, used, active, buffers, cached } = await si.mem();
    return {
      cpu: { temperature, coresSpeed },
      memory: { total, free, used, active, buffers, cached },
    };
  }

  async getSystemInfo(): Promise<SystemInfo> {
    const { manufacturer, brand, speed, speedMax, speedMin } = await si.cpu();
    const interfaces = await si.networkInterfaces();
    return {
      cpu: { manufacturer, brand, speed, speedMax, speedMin },
      network: { interfaces }
    }
  }
}
