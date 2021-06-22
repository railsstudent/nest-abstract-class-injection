import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserReportModule } from '@/user-report'
import { PaymentReportModule } from '@/payment-report'

@Module({
  imports: [UserReportModule, PaymentReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
