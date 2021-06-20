import { Injectable } from '@nestjs/common'
import { Report } from '../interfaces'

@Injectable()
export class CoreService {
  async shareReport(report: Report, ...emails: string[]): Promise<void> {
    const buffer = await report.export()
    await report.sendEmail(buffer, ...emails)
  }
}
