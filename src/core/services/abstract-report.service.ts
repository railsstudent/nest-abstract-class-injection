
export abstract class AbstractReportService {

    abstract export(): Promise<Buffer>

    sendEmail(buffer: Buffer, ...emails: string[]): void {
        console.log('buffer: ', buffer.toString('utf-8'))
        console.log('send user report to emails:', emails)
    }
}
