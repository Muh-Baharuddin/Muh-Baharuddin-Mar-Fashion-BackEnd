import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDaftarRokDto } from '../../dto/create-dto/create-daftar-rok.dto';
import { UpdateDaftarRokDto } from '../../dto/update-dto/update-daftar-rok.dto';
import { DaftarBarang } from 'src/daftar-barang/entities/daftar-barang.entity';
import { Rok } from 'src/daftar-barang/entities/daftar-rok.entity';

@Injectable()
export class DaftarRokService {
  constructor(
    @InjectRepository(DaftarBarang)
    private daftarBarangRepository: Repository<DaftarBarang>,
    @InjectRepository(Rok) private rokRepository: Repository<Rok>,
  ) {}

  findAllRok() {
    return this.daftarBarangRepository.find({
      relations: ['rok'],
    });
  }

  async createRok(id_barang: number, createRokDetails: CreateDaftarRokDto) {
    const daftarBarang = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!daftarBarang) {
      throw new HttpException(
        'daftar barang not found. Cannot create rok',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newRok = this.rokRepository.create({
      ...createRokDetails,
      daftarBarang,
    });
    return this.rokRepository.save(newRok);
  }

  async updateRok(id_barang: number, updateRok: UpdateDaftarRokDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat mengupdate rok',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idRok = updateRok.id_rok;
    const findRokId = await this.rokRepository.findOne({
      where: { id_rok: idRok },
    });
    console.log(findRokId);
    if (!findRokId) {
      throw new HttpException(
        'Rok tidak ditemukan. Tidak dapat mengupdate rok',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.rokRepository.update(idRok, updateRok);
    return {
      message: 'Rok berhasil diperbarui',
      Rok: updateRok,
    };
  }

  async removeRok(id_barang: number, updateRok: UpdateDaftarRokDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat menghapus rok',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idRok = updateRok.id_rok;
    const findRokId = await this.rokRepository.findOne({
      where: { id_rok: idRok },
    });
    console.log(findRokId);
    if (!findRokId) {
      throw new HttpException(
        'Rok tidak ditemukan. Tidak dapat menghapus rok',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.rokRepository.delete(idRok);
    return {
      message: 'Rok berhasil dihapus',
    };
  }
}
