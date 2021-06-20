import { Module } from '@nestjs/common';
import { PaymentReportService } from './payment-report.service';
import { PaymentReportController } from './payment-report.controller';

@Module({
  controllers: [PaymentReportController],
  providers: [PaymentReportService],
})
export class PaymentReportModule {}
