import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarSepraiDto } from '../create-dto/create-daftar-seprai.dto'; 

export class UpdateDaftarBarangDto extends PartialType(CreateDaftarSepraiDto) {}
