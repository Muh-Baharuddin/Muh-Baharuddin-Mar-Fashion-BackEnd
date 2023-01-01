import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateNotaPenjualanDto {
  @IsNotEmpty({ message: 'tanggal_penjualan tidak boleh kosong' })
  @IsDateString({ message: 'tanggal tidak sesuai' })
  tanggal_penjualan: Date;
}
