import { Injectable } from '@nestjs/common'
import { AbstractReportService } from '@/core'

@Injectable()
export class UserReportService extends AbstractReportService {
  async export(): Promise<Buffer> {
    return Buffer.from('Export in user report service')
  }
}
