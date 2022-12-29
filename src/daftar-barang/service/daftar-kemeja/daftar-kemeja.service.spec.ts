import { Test, TestingModule } from '@nestjs/testing';
import { DaftarKemejaService } from './daftar-kemeja.service';

describe('DaftarKemejaService', () => {
  let service: DaftarKemejaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarKemejaService],
    }).compile();

    service = module.get<DaftarKemejaService>(DaftarKemejaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
