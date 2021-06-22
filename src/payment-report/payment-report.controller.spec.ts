import { AbstractReportService } from '@/core'
import { Test, TestingModule } from '@nestjs/testing'
import { PaymentReportController } from './payment-report.controller'
import { PaymentReportService } from './services'

describe('PaymentReportController', () => {
  let controller: PaymentReportController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentReportController],
      providers: [
        PaymentReportService,
        {
          provide: AbstractReportService,
          useValue: {},
        },
      ],
    }).compile()

    controller = module.get<PaymentReportController>(PaymentReportController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
