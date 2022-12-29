import { IsNotEmpty } from 'class-validator';

export class CreateDaftarJaketDto {
  @IsNotEmpty({ message: 'merek tidak boleh kosong' })
  merek: string;

  @IsNotEmpty({ message: 'size tidak boleh kosong' })
  size: string;

  @IsNotEmpty({ message: 'harga tidak boleh kosong' })
  harga: string;

  @IsNotEmpty({ message: 'warna tidak boleh kosong' })
  warna: string;
}
