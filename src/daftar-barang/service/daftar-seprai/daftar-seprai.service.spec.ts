import { Test, TestingModule } from '@nestjs/testing';
import { DaftarSepraiService } from './daftar-seprai.service';

describe('DaftarSepraiService', () => {
  let service: DaftarSepraiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarSepraiService],
    }).compile();

    service = module.get<DaftarSepraiService>(DaftarSepraiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
