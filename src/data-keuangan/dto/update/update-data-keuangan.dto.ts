import { PartialType } from '@nestjs/mapped-types';
import { CreateDataKeuanganDto } from '../create/create-data-keuangan.dto';

export class UpdateDataKeuanganDto extends PartialType(CreateDataKeuanganDto) {}
