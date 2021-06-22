import { Controller, Post } from '@nestjs/common'
import { CoreService, AbstractReportService } from '@/core'

@Controller('payment-report')
export class PaymentReportController {
  constructor(private readonly coreService: CoreService, private report: AbstractReportService) {}

  @Post()
  async shareReport(): Promise<void> {
    await this.coreService.shareReport(this.report, 'john.doe@gmail.com', 'jane.doe@gmail.com')
  }
}
