import { Injectable } from '@nestjs/common'

@Injectable()
export class PaymentReportService {
  async export(): Promise<Buffer> {
    return Buffer.from('Export in payment report service')
  }

  sendEmail(buffer: Buffer, ...emails: string[]): void {
    console.log('buffer: ', buffer.toString('utf-8'))
    console.log('send payment report to emails:', emails)
  }
}