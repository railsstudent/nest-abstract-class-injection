import { Module } from '@nestjs/common'
import { AbstractReportService } from '../core'
import { UserReportService } from './services'
import { UserReportController } from './user-report.controller'

@Module({
  providers: [
    {
      provide: AbstractReportService,
      useClass: UserReportService,
    },
  ],
  controllers: [UserReportController],
})
export class UserReportModule {}
