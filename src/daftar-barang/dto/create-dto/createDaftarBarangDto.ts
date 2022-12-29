import { IsNotEmpty } from 'class-validator';

export class CreateDaftarBarangDto {
  @IsNotEmpty({ message: 'barang tidak boleh kosong' })
  barang: string;
}
