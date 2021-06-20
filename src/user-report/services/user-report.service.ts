import { Injectable } from '@nestjs/common'

@Injectable()
export class UserReportService {
  async export(): Promise<Buffer> {
    return Buffer.from('Export in user report service')
  }

  sendEmail(buffer: Buffer, ...emails: string[]): void {
    console.log('buffer: ', buffer.toString('utf-8'))
    console.log('send user report to emails:', emails)
  }
}
