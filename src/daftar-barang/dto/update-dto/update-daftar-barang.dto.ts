import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarBarangDto } from '../create-dto/create-daftar-barang.dto';

export class UpdateDaftarBarangDto extends PartialType(CreateDaftarBarangDto) {}
