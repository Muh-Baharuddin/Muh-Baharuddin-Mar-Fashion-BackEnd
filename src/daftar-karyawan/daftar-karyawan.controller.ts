import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DaftarKaryawanService } from './daftar-karyawan.service';
import { CreateDaftarKaryawanDto } from './dto/create-daftar-karyawan.dto';
import { UpdateDaftarKaryawanDto } from './dto/update-daftar-karyawan.dto';

@Controller('daftar-karyawan')
export class DaftarKaryawanController {
  constructor(private readonly daftarKaryawanService: DaftarKaryawanService) {}

  @Post()
  create(@Body() createDaftarKaryawanDto: CreateDaftarKaryawanDto) {
    return this.daftarKaryawanService.create(createDaftarKaryawanDto);
  }

  @Get()
  findAll() {
    return this.daftarKaryawanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.daftarKaryawanService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDaftarKaryawanDto: UpdateDaftarKaryawanDto,
  ) {
    return this.daftarKaryawanService.update(+id, updateDaftarKaryawanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daftarKaryawanService.remove(+id);
  }
}
