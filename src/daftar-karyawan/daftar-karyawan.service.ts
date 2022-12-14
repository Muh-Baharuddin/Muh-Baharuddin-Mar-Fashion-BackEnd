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
    try {
      if (newKaryawan['raw']['affectedRows'] > 0) {
        return {
          message: 'User has been added',
          user: createDaftarKaryawanDto,
        };
      }
    } catch (error) {
      return {
        message: 'No user added',
        user: {},
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
    try {
      return updateKaryawan;
    } catch (error) {
      message: 'failed to update daftar karyawan';
      return error.message;
    }
  }

  remove(id_karyawan: number) {
    return this.daftarKaryawanRepository.delete(id_karyawan);
  }
}
