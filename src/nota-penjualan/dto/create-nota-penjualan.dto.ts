import { IsNotEmpty } from 'class-validator';

export class CreateNotaPenjualanDto {
  @IsNotEmpty({ message: 'tanggal_penjualan tidak boleh kosong' })
  tanggal_penjualan: string;
}
