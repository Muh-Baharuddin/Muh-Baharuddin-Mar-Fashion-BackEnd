import { Test, TestingModule } from '@nestjs/testing';
import { DaftarGamisService } from './daftar-gamis.service';

describe('DaftarGamisService', () => {
  let service: DaftarGamisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarGamisService],
    }).compile();

    service = module.get<DaftarGamisService>(DaftarGamisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
