import { Test, TestingModule } from '@nestjs/testing';
import { DaftarJaketService } from './daftar-jaket.service';

describe('DaftarJaketService', () => {
  let service: DaftarJaketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarJaketService],
    }).compile();

    service = module.get<DaftarJaketService>(DaftarJaketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
