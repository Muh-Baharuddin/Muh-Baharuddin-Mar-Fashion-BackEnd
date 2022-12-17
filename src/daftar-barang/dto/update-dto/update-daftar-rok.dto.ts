import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarRokDto } from '../create-dto/create-daftar-rok.dto';

export class UpdateDaftarBarangDto extends PartialType(CreateDaftarRokDto) {}
