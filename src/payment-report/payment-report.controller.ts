import { Controller, Post } from '@nestjs/common'
import { AbstractReportService } from '@/core'

@Controller('payment-report')
export class PaymentReportController {
  constructor(private service: AbstractReportService) {}

  @Post()
  async shareReport(): Promise<void> {
    await this.service.shareReport('john.doe@gmail.com', 'jane.doe@gmail.com')
  }
}
