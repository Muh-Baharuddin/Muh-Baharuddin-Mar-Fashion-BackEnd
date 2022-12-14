import { IsNotEmpty } from 'class-validator';

export class CreateNotaPembelianDto {
  @IsNotEmpty()
  tanggal_pembelian: string;
}
