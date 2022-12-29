import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateDaftarGordenDto } from '../../dto/update-dto/update-daftar-gorden.dto';
import { CreateDaftarGordenDto } from '../../dto/create-dto/create-daftar-gorden.dto';
import { DaftarBarang } from 'src/daftar-barang/entities/daftar-barang.entity';
import { Gorden } from '../../entities/daftar-gorden.entity';

@Injectable()
export class DaftarGordenService {
  constructor(
    @InjectRepository(DaftarBarang)
    private daftarBarangRepository: Repository<DaftarBarang>,
    @InjectRepository(Gorden) private gordenRepository: Repository<Gorden>,
  ) {}

  findAllGorden() {
    return this.daftarBarangRepository.find({
      relations: ['gorden'],
    });
  }

  async createGorden(
    id_barang: number,
    createGordenDetails: CreateDaftarGordenDto,
  ) {
    const daftarBarang = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!daftarBarang) {
      throw new HttpException(
        'daftar barang not found. Cannot create gorden',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newGorden = this.gordenRepository.create({
      ...createGordenDetails,
      daftarBarang,
    });
    return this.gordenRepository.save(newGorden);
  }

  async updateGorden(id_barang: number, updateGorden: UpdateDaftarGordenDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat mengupdate Gorden',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idGorden = updateGorden.id_gorden;
    const findGordenId = await this.gordenRepository.findOne({
      where: { id_gorden: idGorden },
    });
    console.log(findGordenId);
    if (!findGordenId) {
      throw new HttpException(
        'Gorden tidak ditemukan. Tidak dapat mengupdate Gorden',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.gordenRepository.update(idGorden, updateGorden);
    return {
      message: 'Gorden berhasil diperbarui',
      Gorden: updateGorden,
    };
  }

  async removeGorden(id_barang: number, updateGorden: UpdateDaftarGordenDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat menghapus Gorden',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idGorden = updateGorden.id_gorden;
    const findGordenId = await this.gordenRepository.findOne({
      where: { id_gorden: idGorden },
    });
    console.log(findGordenId);
    if (!findGordenId) {
      throw new HttpException(
        'Gorden tidak ditemukan. Tidak dapat menghapus Gorden',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.gordenRepository.delete(idGorden);
    return {
      message: 'Gorden berhasil dihapus',
    };
  }
}
