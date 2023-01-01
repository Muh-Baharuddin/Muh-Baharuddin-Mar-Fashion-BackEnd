import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotaPenjualan } from 'src/data-keuangan/entities/nota-penjualan.entity';
import { CreateNotaPenjualanDto } from 'src/data-keuangan/dto/create/create-nota-penjualan.dto';
import { UpdateNotaPenjualanDto } from 'src/data-keuangan/dto/update/update-nota-penjualan.dto';

@Injectable()
export class NotaPenjualanService {
  constructor(
    @InjectRepository(NotaPenjualan)
    private notaPembelianRepository: Repository<NotaPenjualan>,
  ) {}
  async create(createNotaPenjualanDto: CreateNotaPenjualanDto) {
    const newPenjualan = await this.notaPembelianRepository.save(
      createNotaPenjualanDto,
    );
    if (newPenjualan) {
      return {
        message: 'data penjualan berhasil ditambahkan',
        user: createNotaPenjualanDto,
      };
    }
  }

  findAll() {
    return this.notaPembelianRepository.find();
  }

  async findOne(id_penjualan: number) {
    const findOneId = await this.notaPembelianRepository.findOneBy({
      id_penjualan,
    });
    if (findOneId == null) {
      return {
        message: 'user tidak ditemukan',
      };
    }
    return findOneId;
  }

  async update(
    id_penjualan: number,
    updateNotaPenjualanDto: UpdateNotaPenjualanDto,
  ) {
    const findOneId = await this.notaPembelianRepository.findOneBy({
      id_penjualan,
    });
    if (findOneId == null) {
      return {
        message: 'user tidak ditemukan',
      };
    }
    await this.notaPembelianRepository.update(
      id_penjualan,
      updateNotaPenjualanDto,
    );
    return {
      message: 'data penjualan berhasil diperbarui',
      user: updateNotaPenjualanDto,
    };
  }

  async remove(id_penjualan: number) {
    const findOneId = await this.notaPembelianRepository.findOneBy({
      id_penjualan,
    });
    if (findOneId == null) {
      return {
        message: 'user tidak ditemukan',
      };
    }
    await this.notaPembelianRepository.delete(id_penjualan);
    return {
      message: 'data penjualan berhasil dihapus',
    };
  }
}
