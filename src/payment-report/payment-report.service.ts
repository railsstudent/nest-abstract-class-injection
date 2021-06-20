import { Injectable } from '@nestjs/common';
import { CreatePaymentReportDto } from './dto/create-payment-report.dto';
import { UpdatePaymentReportDto } from './dto/update-payment-report.dto';

@Injectable()
export class PaymentReportService {
  create(createPaymentReportDto: CreatePaymentReportDto) {
    return 'This action adds a new paymentReport';
  }

  findAll() {
    return `This action returns all paymentReport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentReport`;
  }

  update(id: number, updatePaymentReportDto: UpdatePaymentReportDto) {
    return `This action updates a #${id} paymentReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentReport`;
  }
}
