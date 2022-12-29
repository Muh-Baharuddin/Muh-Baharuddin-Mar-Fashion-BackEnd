import { Test, TestingModule } from '@nestjs/testing';
import { DaftarRokService } from './daftar-rok.service';

describe('DaftarRokService', () => {
  let service: DaftarRokService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarRokService],
    }).compile();

    service = module.get<DaftarRokService>(DaftarRokService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
