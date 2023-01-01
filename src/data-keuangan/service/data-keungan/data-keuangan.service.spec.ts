import { Test, TestingModule } from '@nestjs/testing';
import { DataKeuanganService } from './data-keuangan.service';

describe('DataKeuanganService', () => {
  let service: DataKeuanganService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataKeuanganService],
    }).compile();

    service = module.get<DataKeuanganService>(DataKeuanganService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
