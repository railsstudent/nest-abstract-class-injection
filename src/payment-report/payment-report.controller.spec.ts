import { Test, TestingModule } from '@nestjs/testing';
import { PaymentReportController } from './payment-report.controller';
import { PaymentReportService } from './payment-report.service';

describe('PaymentReportController', () => {
  let controller: PaymentReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentReportController],
      providers: [PaymentReportService],
    }).compile();

    controller = module.get<PaymentReportController>(PaymentReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
