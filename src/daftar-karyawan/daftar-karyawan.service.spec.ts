import { Test, TestingModule } from '@nestjs/testing';
import { DaftarKaryawanService } from './daftar-karyawan.service';

describe('DaftarKaryawanService', () => {
  let service: DaftarKaryawanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarKaryawanService],
    }).compile();

    service = module.get<DaftarKaryawanService>(DaftarKaryawanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
