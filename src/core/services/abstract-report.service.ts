export abstract class AbstractReportService {
  abstract export(): Promise<Buffer>

  sendEmail(buffer: Buffer, ...emails: string[]): void {
    console.log('buffer: ', buffer.toString('utf-8'))
    console.log('send report to emails:', emails)
  }

  async shareReport(...emails: string[]): Promise<void> {
    const buffer = await this.export()
    await this.sendEmail(buffer, ...emails)
  }
}
