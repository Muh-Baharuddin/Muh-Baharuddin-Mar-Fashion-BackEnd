import { Test, TestingModule } from '@nestjs/testing';
import { DaftarSupplierController } from './daftar-supplier.controller';
import { DaftarSupplierService } from './daftar-supplier.service';

describe('DaftarSupplierController', () => {
  let controller: DaftarSupplierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaftarSupplierController],
      providers: [DaftarSupplierService],
    }).compile();

    controller = module.get<DaftarSupplierController>(DaftarSupplierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
