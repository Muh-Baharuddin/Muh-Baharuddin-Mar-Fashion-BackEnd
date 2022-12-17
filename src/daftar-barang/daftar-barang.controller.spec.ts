import { Test, TestingModule } from '@nestjs/testing';
import { DaftarBarangController } from './daftar-barang.controller';
import { DaftarBarangService } from './daftar-barang.service';

describe('DaftarBarangController', () => {
  let controller: DaftarBarangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaftarBarangController],
      providers: [DaftarBarangService],
    }).compile();

    controller = module.get<DaftarBarangController>(DaftarBarangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
