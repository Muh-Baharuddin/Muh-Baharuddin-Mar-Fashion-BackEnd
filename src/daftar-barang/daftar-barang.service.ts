import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaftarBarang } from './entities/daftar-barang.entity';
import { CreateDaftarBarangDto } from './dto/create-dto/create-daftar-barang.dto';
import { UpdateDaftarBarangDto } from './dto/update-dto/update-daftar-barang.dto';

@Injectable()
export class DaftarBarangService {
  constructor(
    @InjectRepository(DaftarBarang)
    private DaftarBarangRepository: Repository<DaftarBarang>,
  ) {}
  async create(createDaftarBarangDto: CreateDaftarBarangDto) {
    const newKaryawan = await this.DaftarBarangRepository.save(
      createDaftarBarangDto,
    );
    if (newKaryawan) {
      return {
        message: 'data karyawan berhasil ditambahkan',
        user: createDaftarBarangDto,
      };
    }
  }

  findAll() {
    return this.DaftarBarangRepository.find();
  }

  findOne(id_barang: number) {
    return this.DaftarBarangRepository.findOneBy({ id_barang });
  }

  async update(
    id_barang: number,
    updateDaftarBarangDto: UpdateDaftarBarangDto,
  ) {
    const updateKaryawan = await this.DaftarBarangRepository.update(
      id_barang,
      updateDaftarBarangDto,
    );
    if (updateKaryawan) {
      return {
        message: 'data karyawan berhasil diperbarui',
        user: updateDaftarBarangDto,
      };
    }
  }

  remove(id_barang: number) {
    const deleteKaryawan = this.DaftarBarangRepository.delete(id_barang);
    if (deleteKaryawan) {
      return {
        message: 'data karyawan berhasil diperbarui',
      };
    }
  }
}
