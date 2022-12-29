import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarJaketDto } from '../create-dto/create-daftar-jaket.dto'; 

export class UpdateDaftarJaketDto extends PartialType(CreateDaftarJaketDto) {
  id_jaket: number;
}
