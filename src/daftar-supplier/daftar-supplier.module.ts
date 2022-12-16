import { Module } from '@nestjs/common';
import { DaftarSupplierService } from './daftar-supplier.service';
import { DaftarSupplierController } from './daftar-supplier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DaftarSupplier } from './daftar-supplier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DaftarSupplier])],
  exports: [TypeOrmModule],
  controllers: [DaftarSupplierController],
  providers: [DaftarSupplierService],
})
export class DaftarSupplierModule {}
