import { IsNotEmpty } from 'class-validator';

export class CreateNotaPembelianDto {
  @IsNotEmpty({ message: 'tanggal_pembelian tidak boleh kosong' })
  tanggal_pembelian: string;
}
