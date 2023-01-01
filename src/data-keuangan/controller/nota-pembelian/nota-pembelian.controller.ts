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
import { NotaPembelianService } from 'src/data-keuangan/service/nota-pembelian/nota-pembelian.service';
import { CreateNotaPembelianDto } from 'src/data-keuangan/dto/create/create-nota-pembelian.dto';
import { UpdateNotaPembelianDto } from 'src/data-keuangan/dto/update/update-nota-pembelian.dto';

@Controller('nota-pembelian')
export class NotaPembelianController {
  constructor(private readonly notaPembelianService: NotaPembelianService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createNotaPembelianDto: CreateNotaPembelianDto) {
    return this.notaPembelianService.create(createNotaPembelianDto);
  }

  @Get()
  findAll() {
    return this.notaPembelianService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notaPembelianService.findOne(+id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id') id: string,
    @Body() updateNotaPembelianDto: UpdateNotaPembelianDto,
  ) {
    return this.notaPembelianService.update(+id, updateNotaPembelianDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notaPembelianService.remove(+id);
  }
}
