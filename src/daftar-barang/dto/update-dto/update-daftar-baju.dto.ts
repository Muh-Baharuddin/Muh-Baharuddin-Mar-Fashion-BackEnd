import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarBajuDto } from '../create-dto/create-daftar-baju.dto';

export class UpdateDaftarBajuDto extends PartialType(CreateDaftarBajuDto) {
  id_baju: number;
}
