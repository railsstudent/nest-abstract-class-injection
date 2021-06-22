import { Controller, Post } from '@nestjs/common'
import { AbstractReportService } from '@/core'

@Controller('user-report')
export class UserReportController {
  constructor(private service: AbstractReportService) {}

  @Post()
  async shareReport(): Promise<void> {
    await this.service.shareReport('black.doe@gmail.com', 'white.doe@gmail.com')
  }
}
