import { IsNotEmpty } from 'class-validator';

export class CreateReturDto {
  @IsNotEmpty({ message: 'barang tidak boleh kosong' })
  barang: string;

  @IsNotEmpty({ message: 'tanggal retur tidak boleh kosong' })
  tanggal_retur: string;

  Keterangan: string;
}
