import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarGordenDto } from '../create-dto/create-daftar-gorden.dto'; 

export class UpdateDaftarBarangDto extends PartialType(CreateDaftarGordenDto) {}
