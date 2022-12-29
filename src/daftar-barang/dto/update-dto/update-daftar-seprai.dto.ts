import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarSepraiDto } from '../create-dto/create-daftar-seprai.dto';

export class UpdateDaftarSepraiDto extends PartialType(CreateDaftarSepraiDto) {
  id_seprai: number;
}
