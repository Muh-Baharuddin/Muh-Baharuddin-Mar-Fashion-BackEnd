import { Test, TestingModule } from '@nestjs/testing';
import { NotaPembelianController } from './nota-pembelian.controller';
import { NotaPembelianService } from '../../service/nota-pembelian/nota-pembelian.service';

describe('NotaPembelianController', () => {
  let controller: NotaPembelianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotaPembelianController],
      providers: [NotaPembelianService],
    }).compile();

    controller = module.get<NotaPembelianController>(NotaPembelianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
