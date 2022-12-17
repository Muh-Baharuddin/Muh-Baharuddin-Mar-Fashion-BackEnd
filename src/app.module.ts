import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'database/data-source';
import { UserModule } from './user/user.module';
import { DaftarKaryawanModule } from './daftar-karyawan/daftar-karyawan.module';
import { DaftarSupplierModule } from './daftar-supplier/daftar-supplier.module';
import { NotaPembelianModule } from './nota-pembelian/nota-pembelian.module';
import { NotaPenjualanModule } from './nota-penjualan/nota-penjualan.module';
import { DaftarBarangModule } from './daftar-barang/daftar-barang.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'neoncat',
      password: 'Mypassis1',
      database: 'mar_fashion_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/database/migrations/*{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    DaftarKaryawanModule,
    DaftarSupplierModule,
    NotaPembelianModule,
    NotaPenjualanModule,
    DaftarBarangModule,
  ],
})
export class AppModule {}
