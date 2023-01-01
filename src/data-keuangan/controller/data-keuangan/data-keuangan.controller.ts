import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DataKeuanganService } from 'src/data-keuangan/service/data-keungan/data-keuangan.service';
import { CreateDataKeuanganDto } from 'src/data-keuangan/dto/create/create-data-keuangan.dto';
import { UpdateDataKeuanganDto } from 'src/data-keuangan/dto/update/update-data-keuangan.dto';

@Controller('data-keuangan')
export class DataKeuanganController {
  constructor(private readonly dataKeuanganService: DataKeuanganService) {}

  @Post()
  create(@Body() createDataKeuanganDto: CreateDataKeuanganDto) {
    return this.dataKeuanganService.create(createDataKeuanganDto);
  }

  @Get()
  findAll() {
    return this.dataKeuanganService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataKeuanganService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDataKeuanganDto: UpdateDataKeuanganDto,
  ) {
    return this.dataKeuanganService.update(+id, updateDataKeuanganDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataKeuanganService.remove(+id);
  }
}
