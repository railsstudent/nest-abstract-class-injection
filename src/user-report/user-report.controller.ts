import { Controller, Inject, Post } from '@nestjs/common'
import { CoreService, Report } from '../core'

@Controller('user-report')
export class UserReportController {
  constructor(
    private readonly coreService: CoreService,
    @Inject('Report')
    private report: Report,
  ) {}

  @Post()
  async shareReport(): Promise<void> {
    await this.coreService.shareReport(this.report, 'black.doe@gmail.com', 'white.doe@gmail.com')
  }
}
