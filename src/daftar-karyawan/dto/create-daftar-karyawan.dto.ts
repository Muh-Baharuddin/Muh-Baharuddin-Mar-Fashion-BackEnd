import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateDaftarKaryawanDto {
  @IsNotEmpty()
  nama: string;

  @IsNotEmpty()
  alamat: string;

  @IsNotEmpty()
  @MinLength(10)
  nomor_telpon: string;
}
