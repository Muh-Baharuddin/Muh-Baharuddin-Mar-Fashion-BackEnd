import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDaftarKemejaDto } from '../../dto/create-dto/create-daftar-kemeja.dto';
import { UpdateDaftarKemejaDto } from '../../dto/update-dto/update-daftar-kemeja.dto';
import { DaftarBarang } from 'src/daftar-barang/entities/daftar-barang.entity';
import { kemeja } from '../../entities/daftar-kemeja.entity';

@Injectable()
export class DaftarKemejaService {
  constructor(
    @InjectRepository(DaftarBarang)
    private daftarBarangRepository: Repository<DaftarBarang>,
    @InjectRepository(kemeja) private kemejaRepository: Repository<kemeja>,
  ) {}

  findAllKemeja() {
    return this.daftarBarangRepository.find({
      relations: ['kemeja'],
    });
  }

  async createKemeja(
    id_barang: number,
    createKemejaDetails: CreateDaftarKemejaDto,
  ) {
    const daftarBarang = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!daftarBarang) {
      throw new HttpException(
        'daftar barang not found. Cannot create kemeja',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newKemeja = this.kemejaRepository.create({
      ...createKemejaDetails,
      daftarBarang,
    });
    return this.kemejaRepository.save(newKemeja);
  }

  async updateKemeja(id_barang: number, updateKemeja: UpdateDaftarKemejaDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat mengupdate kemeja',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idKemeja = updateKemeja.id_kemeja;
    const findKemejaId = await this.kemejaRepository.findOne({
      where: { id_kemeja: idKemeja },
    });
    console.log(findKemejaId);
    if (!findKemejaId) {
      throw new HttpException(
        'Kemeja tidak ditemukan. Tidak dapat mengupdate kemeja',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.kemejaRepository.update(idKemeja, updateKemeja);
    return {
      message: 'Kemeja berhasil diperbarui',
      Kemeja: updateKemeja,
    };
  }

  async removeKemeja(id_barang: number, updateKemeja: UpdateDaftarKemejaDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat menghapus Kemeja',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idKemeja = updateKemeja.id_kemeja;
    const findKemejaId = await this.kemejaRepository.findOne({
      where: { id_kemeja: idKemeja },
    });
    console.log(findKemejaId);
    if (!findKemejaId) {
      throw new HttpException(
        'Kemeja tidak ditemukan. Tidak dapat menghapus kemeja',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.kemejaRepository.delete(idKemeja);
    return {
      message: 'Kemeja berhasil dihapus',
    };
  }
}
