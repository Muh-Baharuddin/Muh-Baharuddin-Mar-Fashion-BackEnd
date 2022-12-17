import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarBajuDto } from '../create-dto/create-daftar-baju.dto';

export class UpdateDaftarBarangDto extends PartialType(CreateDaftarBajuDto) {}
