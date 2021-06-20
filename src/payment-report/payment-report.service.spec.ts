import { Test, TestingModule } from '@nestjs/testing';
import { PaymentReportService } from './payment-report.service';

describe('PaymentReportService', () => {
  let service: PaymentReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentReportService],
    }).compile();

    service = module.get<PaymentReportService>(PaymentReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
