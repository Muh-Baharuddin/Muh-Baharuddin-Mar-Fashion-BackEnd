import { Test, TestingModule } from '@nestjs/testing';
import { DaftarCelanaService } from './daftar-celana.service';

describe('DaftarCelanaService', () => {
  let service: DaftarCelanaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarCelanaService],
    }).compile();

    service = module.get<DaftarCelanaService>(DaftarCelanaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
