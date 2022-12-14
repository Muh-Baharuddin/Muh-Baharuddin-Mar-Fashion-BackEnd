import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotaPenjualanService } from './nota-penjualan.service';
import { NotaPenjualanController } from './nota-penjualan.controller';
import { NotaPenjualan } from './nota-penjualan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NotaPenjualan])],
  exports: [TypeOrmModule],
  controllers: [NotaPenjualanController],
  providers: [NotaPenjualanService],
})
export class NotaPenjualanModule {}
