import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentReportService } from './payment-report.service';
import { CreatePaymentReportDto } from './dto/create-payment-report.dto';
import { UpdatePaymentReportDto } from './dto/update-payment-report.dto';

@Controller('payment-report')
export class PaymentReportController {
  constructor(private readonly paymentReportService: PaymentReportService) {}

  @Post()
  create(@Body() createPaymentReportDto: CreatePaymentReportDto) {
    return this.paymentReportService.create(createPaymentReportDto);
  }

  @Get()
  findAll() {
    return this.paymentReportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentReportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentReportDto: UpdatePaymentReportDto) {
    return this.paymentReportService.update(+id, updatePaymentReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentReportService.remove(+id);
  }
}
