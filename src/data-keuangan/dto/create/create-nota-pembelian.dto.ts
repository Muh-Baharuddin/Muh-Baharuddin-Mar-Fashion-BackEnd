import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateNotaPembelianDto {
  @IsNotEmpty({ message: 'tanggal_pembelian tidak boleh kosong' })
  @IsDateString({ message: 'tanggal tidak sesuai' })
  tanggal_pembelian: Date;
}
