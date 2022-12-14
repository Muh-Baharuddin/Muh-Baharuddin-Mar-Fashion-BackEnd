import { Test, TestingModule } from '@nestjs/testing';
import { DaftarSupplierService } from './daftar-supplier.service';

describe('DaftarSupplierService', () => {
  let service: DaftarSupplierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarSupplierService],
    }).compile();

    service = module.get<DaftarSupplierService>(DaftarSupplierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
