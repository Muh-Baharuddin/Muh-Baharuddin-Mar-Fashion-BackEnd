import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDataKeuanganDto } from '../../dto/create/create-data-keuangan.dto';
import { UpdateDataKeuanganDto } from '../../dto/update/update-data-keuangan.dto';
import { DataKeuangan } from 'src/data-keuangan/entities/data-keuangan.entity';

@Injectable()
export class DataKeuanganService {
  constructor(
    @InjectRepository(DataKeuangan)
    private dataKeuanganRepository: Repository<DataKeuangan>,
  ) {}
  async create(createDataKeuanganDto: CreateDataKeuanganDto) {
    const newDataKeuangan = await this.dataKeuanganRepository.save(
      createDataKeuanganDto,
    );
    if (newDataKeuangan) {
      return {
        message: 'data keuangan berhasil ditambahkan',
        data: createDataKeuanganDto,
      };
    }
  }

  findAll() {
    return this.dataKeuanganRepository.find();
  }

  async findOne(id_dataKeuangan: number) {
    const findOneId = await this.dataKeuanganRepository.findOneBy({
      id_dataKeuangan,
    });
    if (findOneId == null) {
      return {
        message: 'id data keuangan tidak ditemukan',
      };
    }
    return findOneId;
  }

  async update(
    id_dataKeuangan: number,
    updateDataKeuanganDto: UpdateDataKeuanganDto,
  ) {
    const findOneId = await this.dataKeuanganRepository.findOneBy({
      id_dataKeuangan,
    });
    if (findOneId == null) {
      return {
        message: 'id data keuangan tidak ditemukan',
      };
    }
    await this.dataKeuanganRepository.update(
      id_dataKeuangan,
      updateDataKeuanganDto,
    );
    return {
      message: 'data keuangan berhasil diperbarui',
      user: updateDataKeuanganDto,
    };
  }

  async remove(id_dataKeuangan: number) {
    const findOneId = await this.dataKeuanganRepository.findOneBy({
      id_dataKeuangan,
    });
    if (findOneId == null) {
      return {
        message: 'id data keuangan tidak ditemukan',
      };
    }
    await this.dataKeuanganRepository.delete(id_dataKeuangan);
    return {
      message: 'data keuangan berhasil dihapus',
    };
  }
}
