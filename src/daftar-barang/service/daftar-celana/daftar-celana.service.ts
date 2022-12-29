import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDaftarCelanaDto } from '../../dto/create-dto/create-daftar-celana.dto';
import { UpdateDaftarCelanaDto } from '../../dto/update-dto/update-daftar-celana.dto';
import { DaftarBarang } from 'src/daftar-barang/entities/daftar-barang.entity';
import { Celana } from '../../entities/daftar-celana.entity';

@Injectable()
export class DaftarCelanaService {
  constructor(
    @InjectRepository(DaftarBarang)
    private daftarBarangRepository: Repository<DaftarBarang>,
    @InjectRepository(Celana) private celanaRepository: Repository<Celana>,
  ) {}

  findAllCelana() {
    return this.daftarBarangRepository.find({
      relations: ['celana'],
    });
  }

  async createCelana(
    id_barang: number,
    createCelanaDetails: CreateDaftarCelanaDto,
  ) {
    const daftarBarang = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!daftarBarang) {
      throw new HttpException(
        'daftar barang not found. Cannot create celana',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newCelana = this.celanaRepository.create({
      ...createCelanaDetails,
      daftarBarang,
    });
    return this.celanaRepository.save(newCelana);
  }

  async updateCelana(id_barang: number, updateCelana: UpdateDaftarCelanaDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat mengupdate Celana',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idCelana = updateCelana.id_celana;
    const findCelanaId = await this.celanaRepository.findOne({
      where: { id_celana: idCelana },
    });
    console.log(findCelanaId);
    if (!findCelanaId) {
      throw new HttpException(
        'Celana tidak ditemukan. Tidak dapat mengupdate Celana',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.celanaRepository.update(idCelana, updateCelana);
    return {
      message: 'Celana berhasil diperbarui',
      Celana: updateCelana,
    };
  }

  async removeCelana(id_barang: number, updateCelana: UpdateDaftarCelanaDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat menghapus Celana',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idCelana = updateCelana.id_celana;
    const findCelanaId = await this.celanaRepository.findOne({
      where: { id_celana: idCelana },
    });
    console.log(findCelanaId);
    if (!findCelanaId) {
      throw new HttpException(
        'Celana tidak ditemukan. Tidak dapat menghapus Celana',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.celanaRepository.delete(idCelana);
    return {
      message: 'Celana berhasil dihapus',
    };
  }
}
