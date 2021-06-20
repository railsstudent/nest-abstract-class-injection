import { Module } from '@nestjs/common'
import { PaymentReportService } from './services'
import { PaymentReportController } from './payment-report.controller'
import { CoreModule } from '../core'

@Module({
  imports: [CoreModule],
  controllers: [PaymentReportController],
  providers: [
    {
      provide: 'Report',
      useClass: PaymentReportService,
    },
  ],
})
export class PaymentReportModule {}
