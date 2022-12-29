import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarRokDto } from '../create-dto/create-daftar-rok.dto';

export class UpdateDaftarRokDto extends PartialType(CreateDaftarRokDto) {
  id_rok: number;
}
