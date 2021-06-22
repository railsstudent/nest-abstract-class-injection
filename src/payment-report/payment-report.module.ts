import { Module } from '@nestjs/common'
import { PaymentReportService } from './services'
import { PaymentReportController } from './payment-report.controller'
import { AbstractReportService, CoreModule } from '@/core'

@Module({
  imports: [CoreModule],
  controllers: [PaymentReportController],
  providers: [
    {
      provide: AbstractReportService,
      useClass: PaymentReportService,
    },
  ],
})
export class PaymentReportModule {}
