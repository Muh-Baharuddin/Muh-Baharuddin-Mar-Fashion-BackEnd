import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDaftarBarangDto } from 'src/daftar-barang/dto/create-dto/createDaftarBarangDto';
import { UpdateDaftarBarangDto } from 'src/daftar-barang/dto/update-dto/updateDaftarBarangDto';
import { DaftarBarang } from 'src/daftar-barang/entities/daftar-barang.entity';

@Injectable()
export class DaftarBarangService {
  constructor(
    @InjectRepository(DaftarBarang)
    private daftarBarangRepository: Repository<DaftarBarang>,
  ) {}

  async createDaftarBarang(daftarBarangDetails: CreateDaftarBarangDto) {
    const newBarang = await this.daftarBarangRepository.save(
      daftarBarangDetails,
    );
    if (newBarang) {
      return {
        message: 'Barang berhasil ditambahkan',
        Barang: daftarBarangDetails,
      };
    }
  }

  async updateDaftarBarang(
    id_barang: number,
    updateBarangDetails: UpdateDaftarBarangDto,
  ) {
    const findOneId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (findOneId == null) {
      return {
        message: 'Barang tidak ditemukan',
      };
    }
    await this.daftarBarangRepository.update(id_barang, updateBarangDetails);
    return {
      message: 'Barang berhasil diperbarui',
      barang: updateBarangDetails,
    };
  }

  async removedaftarBarang(id_barang: number) {
    const findOneId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (findOneId == null) {
      return {
        message: 'Barang tidak ditemukan',
      };
    }
    await this.daftarBarangRepository.delete(id_barang);
    return {
      message: 'Barang berhasil dihapus',
    };
  }
}
