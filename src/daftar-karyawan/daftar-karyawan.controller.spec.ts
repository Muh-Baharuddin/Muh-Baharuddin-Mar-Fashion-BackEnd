import { Test, TestingModule } from '@nestjs/testing';
import { DaftarKaryawanController } from './daftar-karyawan.controller';
import { DaftarKaryawanService } from './daftar-karyawan.service';

describe('DaftarKaryawanController', () => {
  let controller: DaftarKaryawanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaftarKaryawanController],
      providers: [DaftarKaryawanService],
    }).compile();

    controller = module.get<DaftarKaryawanController>(DaftarKaryawanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
