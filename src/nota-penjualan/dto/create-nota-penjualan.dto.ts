import { IsNotEmpty } from 'class-validator';

export class CreateNotaPenjualanDto {
  @IsNotEmpty()
  tanggal_penjualan: string;
}
