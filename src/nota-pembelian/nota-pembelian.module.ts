import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotaPembelianService } from './nota-pembelian.service';
import { NotaPembelianController } from './nota-pembelian.controller';
import { NotaPembelian } from './nota-pembelian.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NotaPembelian])],
  exports: [TypeOrmModule],
  controllers: [NotaPembelianController],
  providers: [NotaPembelianService],
})
export class NotaPembelianModule {}
