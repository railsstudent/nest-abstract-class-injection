export interface Report {
  export(): Promise<Buffer>
  sendEmail(buffer: Buffer, ...emails: string[]): void
}
