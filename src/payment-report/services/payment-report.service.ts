import { AbstractReportService } from '@/core'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PaymentReportService extends AbstractReportService {
  async export(): Promise<Buffer> {
    return Buffer.from('Export in payment report service')
  }
}
