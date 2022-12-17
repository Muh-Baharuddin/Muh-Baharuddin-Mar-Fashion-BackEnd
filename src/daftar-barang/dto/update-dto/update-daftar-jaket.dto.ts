import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarJaketDto } from '../create-dto/create-daftar-jaket.dto'; 

export class UpdateDaftarBarangDto extends PartialType(CreateDaftarJaketDto) {}
