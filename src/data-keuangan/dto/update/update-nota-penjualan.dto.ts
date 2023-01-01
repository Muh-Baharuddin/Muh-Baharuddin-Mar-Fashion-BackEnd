import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaPenjualanDto } from '../create/create-nota-penjualan.dto';

export class UpdateNotaPenjualanDto extends PartialType(CreateNotaPenjualanDto) {}
