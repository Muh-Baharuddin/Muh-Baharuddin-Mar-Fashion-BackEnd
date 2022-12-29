import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarBarangDto } from '../create-dto/createDaftarBarangDto';

export class UpdateDaftarBarangDto extends PartialType(CreateDaftarBarangDto) {}
