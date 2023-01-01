import { Test, TestingModule } from '@nestjs/testing';
import { DataKeuanganController } from './data-keuangan.controller';
import { DataKeuanganService } from '../../service/data-keungan/data-keuangan.service';

describe('DataKeuanganController', () => {
  let controller: DataKeuanganController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataKeuanganController],
      providers: [DataKeuanganService],
    }).compile();

    controller = module.get<DataKeuanganController>(DataKeuanganController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
