import { Test, TestingModule } from '@nestjs/testing';
import { DaftarGordenService } from './daftar-gorden.service';

describe('DaftarGordenService', () => {
  let service: DaftarGordenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarGordenService],
    }).compile();

    service = module.get<DaftarGordenService>(DaftarGordenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
