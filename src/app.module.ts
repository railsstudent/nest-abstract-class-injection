import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CoreModule } from './core/core.module'
import { UserReportModule } from './user-report/user-report.module'
import { PaymentReportModule } from './payment-report/payment-report.module'

@Module({
  imports: [CoreModule, UserReportModule, PaymentReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
