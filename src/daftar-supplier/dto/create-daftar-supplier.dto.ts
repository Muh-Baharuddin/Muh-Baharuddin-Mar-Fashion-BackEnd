import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateDaftarSupplierDto {
  @IsNotEmpty({ message: 'nama tidak boleh kosong' })
  nama: string;

  @IsNotEmpty({ message: 'alamat tidak boleh kosong' })
  alamat: string;

  @IsNotEmpty({ message: 'nomor telepon tidak boleh kosong' })
  @MinLength(10)
  nomor_telepon: string;
}
