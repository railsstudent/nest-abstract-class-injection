import { Controller, Post } from '@nestjs/common'
import { AbstractReportService, CoreService } from '@/core'

@Controller('user-report')
export class UserReportController {
  constructor(private readonly coreService: CoreService, private report: AbstractReportService) {}

  @Post()
  async shareReport(): Promise<void> {
    await this.coreService.shareReport(this.report, 'black.doe@gmail.com', 'white.doe@gmail.com')
  }
}
