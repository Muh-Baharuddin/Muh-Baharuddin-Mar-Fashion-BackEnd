import { Module } from '@nestjs/common';
import { DaftarBarangService } from './daftar-barang.service';
import { DaftarBarangController } from './daftar-barang.controller';

@Module({
  controllers: [DaftarBarangController],
  providers: [DaftarBarangService]
})
export class DaftarBarangModule {}
