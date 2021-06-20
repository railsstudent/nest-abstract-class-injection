import { Controller, Post, Inject } from '@nestjs/common'
import { CoreService, Report } from '../core'

@Controller('payment-report')
export class PaymentReportController {
  constructor(
    private readonly coreService: CoreService,
    @Inject('Report')
    private report: Report,
  ) {}

  @Post()
  async shareReport(): Promise<void> {
    await this.coreService.shareReport(this.report, 'john.doe@gmail.com', 'jane.doe@gmail.com')
  }
}
