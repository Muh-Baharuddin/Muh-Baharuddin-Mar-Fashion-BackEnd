import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReturDto } from './dto/create-retur.dto';
import { UpdateReturDto } from './dto/update-retur.dto';
import { Retur } from './retur.entity';

@Injectable()
export class ReturService {
  constructor(
    @InjectRepository(Retur)
    private returRepository: Repository<Retur>,
  ) {}
  async create(createReturDto: CreateReturDto) {
    const newPembelian = await this.returRepository.save(createReturDto);
    if (newPembelian) {
      return {
        message: 'data retur berhasil ditambahkan',
        user: createReturDto,
      };
    }
  }

  findAll() {
    return this.returRepository.find();
  }

  findOne(id_retur: number) {
    return this.returRepository.findOneBy({ id_retur });
  }

  async update(id_retur: number, updateReturDto: UpdateReturDto) {
    const returUpdate = await this.returRepository.update(
      id_retur,
      updateReturDto,
    );
    if (returUpdate) {
      return {
        message: 'data retur berhasil diperbarui',
        user: updateReturDto,
      };
    }
  }

  remove(id_retur: number) {
    const returDelete = this.returRepository.delete(id_retur);
    if (returDelete) {
      return {
        message: 'data retur berhasil dihapus',
      };
    }
  }
}
