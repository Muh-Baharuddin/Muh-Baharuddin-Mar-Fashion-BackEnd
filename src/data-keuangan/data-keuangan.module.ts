import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataKeuanganService } from './service/data-keungan/data-keuangan.service';
import { NotaPembelianService } from './service/nota-pembelian/nota-pembelian.service';
import { NotaPenjualanService } from './service/nota-penjualan/nota-penjualan.service';
import { DataKeuanganController } from './controller/data-keuangan/data-keuangan.controller';
import { NotaPembelianController } from './controller/nota-pembelian/nota-pembelian.controller';
import { NotaPenjualanController } from './controller/nota-penjualan/nota-penjualan.controller';
import { DataKeuangan } from './entities/data-keuangan.entity';
import { NotaPembelian } from './entities/nota-pembelian.entity';
import { NotaPenjualan } from './entities/nota-penjualan.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DataKeuangan, NotaPembelian, NotaPenjualan]),
  ],
  exports: [TypeOrmModule],
  controllers: [
    DataKeuanganController,
    NotaPembelianController,
    NotaPenjualanController,
  ],
  providers: [DataKeuanganService, NotaPembelianService, NotaPenjualanService],
})
export class DataKeuanganModule {}
