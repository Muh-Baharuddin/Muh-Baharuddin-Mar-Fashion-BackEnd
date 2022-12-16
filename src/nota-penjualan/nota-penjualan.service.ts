import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotaPenjualan } from './nota-penjualan.entity';
import { CreateNotaPenjualanDto } from './dto/create-nota-penjualan.dto';
import { UpdateNotaPenjualanDto } from './dto/update-nota-penjualan.dto';

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

  findOne(id_penjualan: number) {
    return this.notaPembelianRepository.findOneBy({ id_penjualan });
  }

  async update(
    id_penjualan: number,
    updateNotaPenjualanDto: UpdateNotaPenjualanDto,
  ) {
    const penjualanUpdate = await this.notaPembelianRepository.update(
      id_penjualan,
      updateNotaPenjualanDto,
    );
    if (penjualanUpdate) {
      return {
        message: 'data penjualan berhasil diperbarui',
        user: updateNotaPenjualanDto,
      };
    }
  }

  remove(id_penjualan: number) {
    const penjualanDelete = this.notaPembelianRepository.delete(id_penjualan);
    if (penjualanDelete) {
      return {
        message: 'data penjualan berhasil dihapus',
      };
    }
  }
}
