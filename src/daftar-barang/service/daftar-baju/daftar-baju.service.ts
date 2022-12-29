import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDaftarBajuDto } from 'src/daftar-barang/dto/create-dto/create-daftar-baju.dto';
import { UpdateDaftarBajuDto } from '../../dto/update-dto/update-daftar-baju.dto';
import { DaftarBarang } from 'src/daftar-barang/entities/daftar-barang.entity';
import { Baju } from '../../entities/daftar-baju.entity';

@Injectable()
export class DaftarBajuService {
  constructor(
    @InjectRepository(DaftarBarang)
    private daftarBarangRepository: Repository<DaftarBarang>,
    @InjectRepository(Baju) private bajuRepository: Repository<Baju>,
  ) {}

  findAllBaju() {
    return this.daftarBarangRepository.find({
      relations: ['baju'],
    });
  }

  async createBaju(id_barang: number, createBajuDetails: CreateDaftarBajuDto) {
    const daftarBarang = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!daftarBarang) {
      throw new HttpException(
        'daftar barang not found. Cannot create Baju',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newBaju = this.bajuRepository.create({
      ...createBajuDetails,
      daftarBarang,
    });
    return this.bajuRepository.save(newBaju);
  }

  async updateBaju(id_barang: number, updateBaju: UpdateDaftarBajuDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat mengupdate Baju',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idBaju = updateBaju.id_baju;
    const findBajuId = await this.bajuRepository.findOne({
      where: { id_baju: idBaju },
    });
    console.log(findBajuId);
    if (!findBajuId) {
      throw new HttpException(
        'Baju tidak ditemukan. Tidak dapat mengupdate Baju',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.bajuRepository.update(idBaju, updateBaju);
    return {
      message: 'Baju berhasil diperbarui',
      Baju: updateBaju,
    };
  }

  async removeBaju(id_barang: number, updateBaju: UpdateDaftarBajuDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat menghapus Baju',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idBaju = updateBaju.id_baju;
    const findBajuId = await this.bajuRepository.findOne({
      where: { id_baju: idBaju },
    });
    console.log(findBajuId);
    if (!findBajuId) {
      throw new HttpException(
        'Baju tidak ditemukan. Tidak dapat menghapus Baju',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.bajuRepository.delete(idBaju);
    return {
      message: 'Baju berhasil dihapus',
    };
  }
}
