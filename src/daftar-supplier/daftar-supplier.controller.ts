import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DaftarSupplierService } from './daftar-supplier.service';
import { CreateDaftarSupplierDto } from './dto/create-daftar-supplier.dto';
import { UpdateDaftarSupplierDto } from './dto/update-daftar-supplier.dto';

@Controller('daftar-supplier')
export class DaftarSupplierController {
  constructor(private readonly daftarSupplierService: DaftarSupplierService) {}

  @Post()
  create(@Body() createDaftarSupplierDto: CreateDaftarSupplierDto) {
    return this.daftarSupplierService.create(createDaftarSupplierDto);
  }

  @Get()
  findAll() {
    return this.daftarSupplierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.daftarSupplierService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDaftarSupplierDto: UpdateDaftarSupplierDto,
  ) {
    return this.daftarSupplierService.update(+id, updateDaftarSupplierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daftarSupplierService.remove(+id);
  }
}
