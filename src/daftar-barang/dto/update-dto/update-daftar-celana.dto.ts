import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarCelanaDto } from '../create-dto/create-daftar-celana.dto'; 

export class UpdateDaftarCelanaDto extends PartialType(CreateDaftarCelanaDto) {
  id_celana: number;
}
