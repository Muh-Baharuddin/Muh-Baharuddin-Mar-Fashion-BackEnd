import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotaPembelianDto } from './dto/create-nota-pembelian.dto';
import { UpdateNotaPembelianDto } from './dto/update-nota-pembelian.dto';
import { NotaPembelian } from './nota-pembelian.entity';

@Injectable()
export class NotaPembelianService {
  constructor(
    @InjectRepository(NotaPembelian)
    private notaPembelianRepository: Repository<NotaPembelian>,
  ) {}
  async create(createNotaPembelianDto: CreateNotaPembelianDto) {
    const newPembelian = await this.notaPembelianRepository.save(
      createNotaPembelianDto,
    );
    if (newPembelian) {
      return {
        message: 'data pembelian berhasil ditambahkan',
        user: createNotaPembelianDto,
      };
    }
  }

  findAll() {
    return this.notaPembelianRepository.find();
  }

  findOne(id_pembelian: number) {
    return this.notaPembelianRepository.findOneBy({ id_pembelian });
  }

  async update(
    id_pembelian: number,
    updateNotaPembelianDto: UpdateNotaPembelianDto,
  ) {
    const pembelianUpdate = await this.notaPembelianRepository.update(
      id_pembelian,
      updateNotaPembelianDto,
    );
    if (pembelianUpdate) {
      return {
        message: 'data pembelian berhasil diperbarui',
        user: updateNotaPembelianDto,
      };
    }
  }

  remove(id_pembelian: number) {
    const pembelianDelete = this.notaPembelianRepository.delete(id_pembelian);
    if (pembelianDelete) {
      return {
        message: 'data pembelian berhasil dihapus',
      };
    }
  }
}
