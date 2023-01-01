import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateDataKeuanganDto {
  @IsNotEmpty({ message: 'tanggal tidak boleh kosong' })
  @IsDateString({ message: 'tanggal tidak sesuai' })
  tanggal: Date;

  @IsNotEmpty({ message: 'pendapatan tidak boleh kosong' })
  pendapatan: number;

  @IsNotEmpty({ message: 'pengeluaran tidak boleh kosong' })
  pengeluaran: number;

  @IsNotEmpty({ message: 'hasil tidak boleh kosong' })
  hasil: number;
}
