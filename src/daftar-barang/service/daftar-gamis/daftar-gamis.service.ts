import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDaftarGamisDto } from '../../dto/create-dto/create-daftar-gamis.dto';
import { UpdateDaftarGamisDto } from '../../dto/update-dto/update-daftar-gamis.dto';
import { DaftarBarang } from 'src/daftar-barang/entities/daftar-barang.entity';
import { Gamis } from '../../entities/daftar-gamis.entity';

@Injectable()
export class DaftarGamisService {
  constructor(
    @InjectRepository(DaftarBarang)
    private daftarBarangRepository: Repository<DaftarBarang>,
    @InjectRepository(Gamis) private gamisRepository: Repository<Gamis>,
  ) {}

  findAllGamis() {
    return this.daftarBarangRepository.find({
      relations: ['gamis'],
    });
  }

  async createGamis(
    id_barang: number,
    createGamisDetails: CreateDaftarGamisDto,
  ) {
    const daftarBarang = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!daftarBarang) {
      throw new HttpException(
        'daftar barang not found. Cannot create gamis',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newGamis = this.gamisRepository.create({
      ...createGamisDetails,
      daftarBarang,
    });
    return this.gamisRepository.save(newGamis);
  }

  async updateGamis(id_barang: number, updateGamis: UpdateDaftarGamisDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat mengupdate Gamis',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idGamis = updateGamis.id_gamis;
    const findGamisId = await this.gamisRepository.findOne({
      where: { id_gamis: idGamis },
    });
    console.log(findGamisId);
    if (!findGamisId) {
      throw new HttpException(
        'Gamis tidak ditemukan. Tidak dapat mengupdate Gamis',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.gamisRepository.update(idGamis, updateGamis);
    return {
      message: 'Gamis berhasil diperbarui',
      Gamis: updateGamis,
    };
  }

  async removeGamis(id_barang: number, updateGamis: UpdateDaftarGamisDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat menghapus Gamis',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idGamis = updateGamis.id_gamis;
    const findGamisId = await this.gamisRepository.findOne({
      where: { id_gamis: idGamis },
    });
    console.log(findGamisId);
    if (!findGamisId) {
      throw new HttpException(
        'Gamis tidak ditemukan. Tidak dapat menghapus Gamis',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.gamisRepository.delete(idGamis);
    return {
      message: 'Gamis berhasil dihapus',
    };
  }
}
