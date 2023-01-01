import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaPembelianDto } from '../create/create-nota-pembelian.dto';

export class UpdateNotaPembelianDto extends PartialType(CreateNotaPembelianDto) {}
