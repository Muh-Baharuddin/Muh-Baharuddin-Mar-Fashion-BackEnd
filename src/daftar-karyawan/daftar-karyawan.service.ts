/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaftarKaryawan } from './daftar-karyawan.entity';
import { CreateDaftarKaryawanDto } from './dto/create-daftar-karyawan.dto';
import { UpdateDaftarKaryawanDto } from './dto/update-daftar-karyawan.dto';

@Injectable()
export class DaftarKaryawanService {
  constructor(
    @InjectRepository(DaftarKaryawan)
    private daftarKaryawanRepository: Repository<DaftarKaryawan>,
  ) {}
  async create(createDaftarKaryawanDto: CreateDaftarKaryawanDto) {
    const newKaryawan = await this.daftarKaryawanRepository.save(createDaftarKaryawanDto);
    if (newKaryawan) {
      return {
        message: 'data karyawan berhasil ditambahkan',
        user: createDaftarKaryawanDto,
      };
    }
  }

  findAll() {
    return this.daftarKaryawanRepository.find();
  }

  findOne(id_karyawan: number) {
    return this.daftarKaryawanRepository.findOneBy({ id_karyawan });
  }

  async update(id_karyawan: number, updateDaftarKaryawanDto: UpdateDaftarKaryawanDto) {
    const updateKaryawan = await this.daftarKaryawanRepository.update(id_karyawan, updateDaftarKaryawanDto);
    if (updateKaryawan) {
      return {
        message: 'data karyawan berhasil diperbarui',
        user: updateDaftarKaryawanDto,
      };
    }
  }

  remove(id_karyawan: number) {
    const deleteKaryawan = this.daftarKaryawanRepository.delete(id_karyawan);
    if (!deleteKaryawan) {
      return {
        message: 'data karyawan berhasil diperbarui',
      };
    }
  }
}
