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
  ParseIntPipe,
} from '@nestjs/common';
import { DaftarBarangService } from 'src/daftar-barang/service/daftar-barang/daftar-barang.service';
import { DaftarBajuService } from '../service/daftar-baju/daftar-baju.service';
import { DaftarCelanaService } from '../service/daftar-celana/daftar-celana.service';
import { DaftarGamisService } from '../service/daftar-gamis/daftar-gamis.service';
import { DaftarGordenService } from '../service/daftar-gorden/daftar-gorden.service';
import { DaftarJaketService } from '../service/daftar-jaket/daftar-jaket.service';
import { DaftarKelambuService } from '../service/daftar-kelambu/daftar-kelambu.service';
import { DaftarKemejaService } from '../service/daftar-kemeja/daftar-kemeja.service';
import { DaftarRokService } from '../service/daftar-rok/daftar-rok.service';
import { DaftarSepraiService } from '../service/daftar-seprai/daftar-seprai.service';
import { CreateDaftarBarangDto } from 'src/daftar-barang/dto/create-dto/createDaftarBarangDto';
import { CreateDaftarBajuDto } from '../dto/create-dto/create-daftar-baju.dto';
import { CreateDaftarCelanaDto } from '../dto/create-dto/create-daftar-celana.dto';
import { CreateDaftarGamisDto } from '../dto/create-dto/create-daftar-gamis.dto';
import { CreateDaftarGordenDto } from '../dto/create-dto/create-daftar-gorden.dto';
import { CreateDaftarJaketDto } from '../dto/create-dto/create-daftar-jaket.dto';
import { CreateDaftarKelambuDto } from '../dto/create-dto/create-daftar-kelambu.dto';
import { CreateDaftarKemejaDto } from '../dto/create-dto/create-daftar-kemeja.dto';
import { CreateDaftarRokDto } from '../dto/create-dto/create-daftar-rok.dto';
import { CreateDaftarSepraiDto } from 'src/daftar-barang/dto/create-dto/create-daftar-seprai.dto';
import { UpdateDaftarBarangDto } from 'src/daftar-barang/dto/update-dto/updateDaftarBarangDto';
import { UpdateDaftarBajuDto } from '../dto/update-dto/update-daftar-baju.dto';
import { UpdateDaftarCelanaDto } from '../dto/update-dto/update-daftar-celana.dto';
import { UpdateDaftarGamisDto } from '../dto/update-dto/update-daftar-gamis.dto';
import { UpdateDaftarGordenDto } from '../dto/update-dto/update-daftar-gorden.dto';
import { UpdateDaftarJaketDto } from '../dto/update-dto/update-daftar-jaket.dto';
import { UpdateDaftarKelambuDto } from '../dto/update-dto/update-daftar-kelambu.dto';
import { UpdateDaftarKemejaDto } from '../dto/update-dto/update-daftar-kemeja.dto';
import { UpdateDaftarRokDto } from '../dto/update-dto/update-daftar-rok.dto';
import { UpdateDaftarSepraiDto } from '../dto/update-dto/update-daftar-seprai.dto';

@Controller('daftar-barang')
export class DaftarBarangController {
  constructor(
    private readonly daftarBarangService: DaftarBarangService,
    private readonly daftarBajuService: DaftarBajuService,
    private readonly daftarCelanaService: DaftarCelanaService,
    private readonly daftarGamisService: DaftarGamisService,
    private readonly daftarGordenService: DaftarGordenService,
    private readonly daftarJaketService: DaftarJaketService,
    private readonly daftarKelambuService: DaftarKelambuService,
    private readonly daftarKemejaService: DaftarKemejaService,
    private readonly daftarRokService: DaftarRokService,
    private readonly daftarSepraiService: DaftarSepraiService,
  ) {}

  @Get('/baju')
  findAllBaju() {
    return this.daftarBajuService.findAllBaju();
  }

  @Get('/celana')
  findAllCelana() {
    return this.daftarCelanaService.findAllCelana();
  }

  @Get('/gamis')
  findAllGamis() {
    return this.daftarGamisService.findAllGamis();
  }

  @Get('/gorden')
  findAllGorden() {
    return this.daftarGordenService.findAllGorden();
  }

  @Get('/jaket')
  findAllJaket() {
    return this.daftarJaketService.findAllJaket();
  }

  @Get('/kelambu')
  findAllKelambu() {
    return this.daftarKelambuService.findAllKelambu();
  }

  @Get('/kemeja')
  findAllKemeja() {
    return this.daftarKemejaService.findAllKemeja();
  }

  @Get('/rok')
  findAllRok() {
    return this.daftarRokService.findAllRok();
  }

  @Get('/seprai')
  findAllSeprai() {
    return this.daftarSepraiService.findAllSeprai();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.daftarBarangService.findOne(+id);
  // }

  @Post()
  @UsePipes(ValidationPipe)
  createDaftarBarang(@Body() createDaftarBarangDto: CreateDaftarBarangDto) {
    return this.daftarBarangService.createDaftarBarang(createDaftarBarangDto);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  async updateDaftarBarang(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDaftarBarangDto: UpdateDaftarBarangDto,
  ) {
    return this.daftarBarangService.updateDaftarBarang(
      id,
      updateDaftarBarangDto,
    );
  }

  @Delete(':id')
  removeDaftarBarang(@Param('id') id: string) {
    return this.daftarBarangService.removedaftarBarang(+id);
  }

  @Post(':id/baju')
  @UsePipes(ValidationPipe)
  createBaju(
    @Param('id', ParseIntPipe) id: number,
    @Body() createDaftarBajuDto: CreateDaftarBajuDto,
  ) {
    return this.daftarBajuService.createBaju(id, createDaftarBajuDto);
  }

  @Patch(':id/baju')
  @UsePipes(ValidationPipe)
  async updateBaju(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBaju: UpdateDaftarBajuDto,
  ) {
    return this.daftarBajuService.updateBaju(id, updateBaju);
  }

  @Delete(':id/baju')
  removeBaju(
    @Param('id', ParseIntPipe) id: number,
    @Body() deleteBaju: UpdateDaftarBajuDto,
  ) {
    return this.daftarBajuService.removeBaju(id, deleteBaju);
  }

  @Post(':id/celana')
  @UsePipes(ValidationPipe)
  createCelana(
    @Param('id', ParseIntPipe) id: number,
    @Body() createDaftarCelanaDto: CreateDaftarCelanaDto,
  ) {
    return this.daftarCelanaService.createCelana(id, createDaftarCelanaDto);
  }

  @Patch(':id/celana')
  @UsePipes(ValidationPipe)
  async updateCelana(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCelana: UpdateDaftarCelanaDto,
  ) {
    return this.daftarCelanaService.updateCelana(id, updateCelana);
  }

  @Delete(':id/celana')
  removeCelana(
    @Param('id', ParseIntPipe) id: number,
    @Body() deleteCelana: UpdateDaftarCelanaDto,
  ) {
    return this.daftarCelanaService.removeCelana(id, deleteCelana);
  }

  @Post(':id/gamis')
  @UsePipes(ValidationPipe)
  createGamis(
    @Param('id', ParseIntPipe) id: number,
    @Body() createDaftarGamisDto: CreateDaftarGamisDto,
  ) {
    return this.daftarGamisService.createGamis(id, createDaftarGamisDto);
  }

  @Patch(':id/gamis')
  @UsePipes(ValidationPipe)
  async updateGamis(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGamis: UpdateDaftarGamisDto,
  ) {
    return this.daftarGamisService.updateGamis(id, updateGamis);
  }

  @Delete(':id/gamis')
  removeGamis(
    @Param('id', ParseIntPipe) id: number,
    @Body() deleteGamis: UpdateDaftarGamisDto,
  ) {
    return this.daftarGamisService.removeGamis(id, deleteGamis);
  }

  @Post(':id/gorden')
  @UsePipes(ValidationPipe)
  createGorden(
    @Param('id', ParseIntPipe) id: number,
    @Body() createDaftarGordenDto: CreateDaftarGordenDto,
  ) {
    return this.daftarGordenService.createGorden(id, createDaftarGordenDto);
  }

  @Patch(':id/gorden')
  @UsePipes(ValidationPipe)
  async updateGorden(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGorden: UpdateDaftarGordenDto,
  ) {
    return this.daftarGordenService.updateGorden(id, updateGorden);
  }

  @Delete(':id/gorden')
  removeGorden(
    @Param('id', ParseIntPipe) id: number,
    @Body() deleteGorden: UpdateDaftarGordenDto,
  ) {
    return this.daftarGordenService.removeGorden(id, deleteGorden);
  }

  @Post(':id/jaket')
  @UsePipes(ValidationPipe)
  createJaket(
    @Param('id', ParseIntPipe) id: number,
    @Body() createDaftarJaketDto: CreateDaftarJaketDto,
  ) {
    return this.daftarJaketService.createJaket(id, createDaftarJaketDto);
  }

  @Patch(':id/jaket')
  @UsePipes(ValidationPipe)
  async updateJaket(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateJaket: UpdateDaftarJaketDto,
  ) {
    return this.daftarJaketService.updateJaket(id, updateJaket);
  }

  @Delete(':id/jaket')
  removeJaket(
    @Param('id', ParseIntPipe) id: number,
    @Body() deleteJaket: UpdateDaftarJaketDto,
  ) {
    return this.daftarJaketService.removeJaket(id, deleteJaket);
  }

  @Post(':id/kelambu')
  @UsePipes(ValidationPipe)
  createKelambu(
    @Param('id', ParseIntPipe) id: number,
    @Body() createDaftarKelambuDto: CreateDaftarKelambuDto,
  ) {
    return this.daftarKelambuService.createKelambu(id, createDaftarKelambuDto);
  }

  @Patch(':id/kelambu')
  @UsePipes(ValidationPipe)
  async updateKelambu(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateKelambu: UpdateDaftarKelambuDto,
  ) {
    return this.daftarKelambuService.updateKelambu(id, updateKelambu);
  }

  @Delete(':id/kelambu')
  removeKelambu(
    @Param('id', ParseIntPipe) id: number,
    @Body() deleteKelambu: UpdateDaftarKelambuDto,
  ) {
    return this.daftarKelambuService.removeKelambu(id, deleteKelambu);
  }

  @Post(':id/kemeja')
  @UsePipes(ValidationPipe)
  createKemeja(
    @Param('id', ParseIntPipe) id: number,
    @Body() createDaftarKemejaDto: CreateDaftarKemejaDto,
  ) {
    return this.daftarKemejaService.createKemeja(id, createDaftarKemejaDto);
  }

  @Patch(':id/kemeja')
  @UsePipes(ValidationPipe)
  async updateKemeja(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateKemeja: UpdateDaftarKemejaDto,
  ) {
    return this.daftarKemejaService.updateKemeja(id, updateKemeja);
  }

  @Delete(':id/kemeja')
  removeKemeja(
    @Param('id', ParseIntPipe) id: number,
    @Body() deleteKemeja: UpdateDaftarKemejaDto,
  ) {
    return this.daftarKemejaService.removeKemeja(id, deleteKemeja);
  }

  @Post(':id/rok')
  @UsePipes(ValidationPipe)
  createRok(
    @Param('id', ParseIntPipe) id: number,
    @Body() createDaftarRokDto: CreateDaftarRokDto,
  ) {
    return this.daftarRokService.createRok(id, createDaftarRokDto);
  }

  @Patch(':id/rok')
  @UsePipes(ValidationPipe)
  async updateRok(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRok: UpdateDaftarRokDto,
  ) {
    return this.daftarRokService.updateRok(id, updateRok);
  }

  @Delete(':id/rok')
  removeRok(
    @Param('id', ParseIntPipe) id: number,
    @Body() deleteRok: UpdateDaftarRokDto,
  ) {
    return this.daftarRokService.removeRok(id, deleteRok);
  }

  @Post(':id/seprai')
  @UsePipes(ValidationPipe)
  createSeprai(
    @Param('id', ParseIntPipe) id: number,
    @Body() createDaftarSepraiDto: CreateDaftarSepraiDto,
  ) {
    return this.daftarSepraiService.createSeprai(id, createDaftarSepraiDto);
  }

  @Patch(':id/seprai')
  @UsePipes(ValidationPipe)
  async updateSeprai(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSeprai: UpdateDaftarSepraiDto,
  ) {
    return this.daftarSepraiService.updateSeprai(id, updateSeprai);
  }

  @Delete(':id/seprai')
  removeSeprai(
    @Param('id', ParseIntPipe) id: number,
    @Body() deleteSeprai: UpdateDaftarSepraiDto,
  ) {
    return this.daftarSepraiService.removeSeprai(id, deleteSeprai);
  }
}
