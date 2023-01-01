import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'database/data-source';
import { UserModule } from './user/user.module';
import { DaftarKaryawanModule } from './daftar-karyawan/daftar-karyawan.module';
import { DaftarSupplierModule } from './daftar-supplier/daftar-supplier.module';
import { DaftarBarangModule } from './daftar-barang/daftar-barang.module';
import { ReturModule } from './retur/retur.module';
import { DataKeuanganModule } from './data-keuangan/data-keuangan.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    DaftarKaryawanModule,
    DaftarSupplierModule,
    DaftarBarangModule,
    ReturModule,
    DataKeuanganModule,
  ],
})
export class AppModule {}
