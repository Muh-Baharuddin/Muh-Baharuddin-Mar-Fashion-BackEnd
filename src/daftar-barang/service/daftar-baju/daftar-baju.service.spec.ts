import { Test, TestingModule } from '@nestjs/testing';
import { DaftarBajuService } from './daftar-baju.service';

describe('DaftarBajuService', () => {
  let service: DaftarBajuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarBajuService],
    }).compile();

    service = module.get<DaftarBajuService>(DaftarBajuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
