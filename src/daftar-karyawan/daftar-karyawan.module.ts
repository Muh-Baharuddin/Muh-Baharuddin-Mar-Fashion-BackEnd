import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DaftarKaryawanService } from './daftar-karyawan.service';
import { DaftarKaryawanController } from './daftar-karyawan.controller';
import { DaftarKaryawan } from './daftar-karyawan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DaftarKaryawan])],
  exports: [TypeOrmModule],
  controllers: [DaftarKaryawanController],
  providers: [DaftarKaryawanService],
})
export class DaftarKaryawanModule {}
