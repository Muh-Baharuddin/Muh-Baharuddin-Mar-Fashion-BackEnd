import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarKelambuDto } from '../create-dto/create-daftar-kelambu.dto'; 

export class UpdateDaftarBarangDto extends PartialType(CreateDaftarKelambuDto) {}
