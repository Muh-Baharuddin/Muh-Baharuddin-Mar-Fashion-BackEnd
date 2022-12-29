import { Test, TestingModule } from '@nestjs/testing';
import { DaftarKelambuService } from './daftar-kelambu.service';

describe('DaftarKelambuService', () => {
  let service: DaftarKelambuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarKelambuService],
    }).compile();

    service = module.get<DaftarKelambuService>(DaftarKelambuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
