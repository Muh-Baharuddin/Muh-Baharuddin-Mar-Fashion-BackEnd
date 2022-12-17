import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DaftarBarangService } from './daftar-barang.service';
import { CreateDaftarBarangDto } from './dto/create-dto/create-daftar-barang.dto';
import { UpdateDaftarBarangDto } from './dto/update-dto/update-daftar-barang.dto';

@Controller('daftar-barang')
export class DaftarBarangController {
  constructor(private readonly daftarBarangService: DaftarBarangService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createDaftarBarangDto: CreateDaftarBarangDto) {
    return this.daftarBarangService.create(createDaftarBarangDto);
  }

  @Get()
  findAll() {
    return this.daftarBarangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.daftarBarangService.findOne(+id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id') id: string,
    @Body() updateDaftarBarangDto: UpdateDaftarBarangDto,
  ) {
    return this.daftarBarangService.update(+id, updateDaftarBarangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daftarBarangService.remove(+id);
  }
}
