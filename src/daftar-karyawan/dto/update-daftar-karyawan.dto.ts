import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarKaryawanDto } from './create-daftar-karyawan.dto';

export class UpdateDaftarKaryawanDto extends PartialType(
  CreateDaftarKaryawanDto,
) {}
