import { Test, TestingModule } from '@nestjs/testing';
import { DaftarBarangService } from './daftar-barang.service';

describe('DaftarBarangService', () => {
  let service: DaftarBarangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarBarangService],
    }).compile();

    service = module.get<DaftarBarangService>(DaftarBarangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
