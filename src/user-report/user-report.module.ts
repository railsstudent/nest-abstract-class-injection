import { Module } from '@nestjs/common'
import { CoreModule } from '../core'
import { UserReportService } from './services'
import { UserReportController } from './user-report.controller'

@Module({
  imports: [CoreModule],
  providers: [
    {
      provide: 'Report',
      useClass: UserReportService,
    },
  ],
  controllers: [UserReportController],
})
export class UserReportModule {}
