import { Module } from '@nestjs/common'
import { AbstractReportService, CoreModule } from '../core'
import { UserReportService } from './services'
import { UserReportController } from './user-report.controller'

@Module({
  imports: [CoreModule],
  providers: [
    {
      provide: AbstractReportService,
      useClass: UserReportService,
    },
  ],
  controllers: [UserReportController],
})
export class UserReportModule {}
