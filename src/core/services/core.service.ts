import { Injectable } from '@nestjs/common'
import { AbstractReportService } from './abstract-report.service'

@Injectable()
export class CoreService {
  async shareReport(report: AbstractReportService, ...emails: string[]): Promise<void> {
    const buffer = await report.export()
    await report.sendEmail(buffer, ...emails)
  }
}
