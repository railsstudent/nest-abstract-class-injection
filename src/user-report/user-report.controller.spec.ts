import { AbstractReportService } from '@/core'
import { Test, TestingModule } from '@nestjs/testing'
import { UserReportController } from './user-report.controller'

describe('UserReportControllerController', () => {
  let controller: UserReportController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserReportController],
      providers: [
        {
          provide: AbstractReportService,
          useValue: {},
        },
      ],
    }).compile()

    controller = module.get<UserReportController>(UserReportController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
