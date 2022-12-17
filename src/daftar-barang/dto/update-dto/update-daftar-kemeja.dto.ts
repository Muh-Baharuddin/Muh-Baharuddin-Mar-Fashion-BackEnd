import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarKemejaDto } from '../create-dto/create-daftar-kemeja.dto';

export class UpdateDaftarBarangDto extends PartialType(CreateDaftarKemejaDto) {}
