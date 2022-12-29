import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarGamisDto } from '../create-dto/create-daftar-gamis.dto'; 

export class UpdateDaftarGamisDto extends PartialType(CreateDaftarGamisDto) {
  id_gamis: number;
}
