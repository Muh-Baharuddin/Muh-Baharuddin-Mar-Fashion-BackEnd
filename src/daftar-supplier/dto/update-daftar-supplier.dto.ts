import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarSupplierDto } from './create-daftar-supplier.dto';

export class UpdateDaftarSupplierDto extends PartialType(CreateDaftarSupplierDto) {}
