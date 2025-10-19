import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('health')
@Controller()
export class HealthController {
  @Get('health')
  @ApiOkResponse({ description: 'Service health' })
  health() {
    return {
      status: 'healthy',
      service: 'insightric-auth-service',
    };
  }

  @Get('readiness')
  @ApiOkResponse({ description: 'Service readiness' })
  readiness() {
    return {
      status: 'ready',
      service: 'insightric-auth-service',
    };
  }
}
