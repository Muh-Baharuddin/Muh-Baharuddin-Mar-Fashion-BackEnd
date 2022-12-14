import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateDaftarSupplierDto {
  @IsNotEmpty()
  nama: string;

  @IsNotEmpty()
  alamat: string;

  @IsNotEmpty()
  @MinLength(10)
  nomor_telpon: string;
}
