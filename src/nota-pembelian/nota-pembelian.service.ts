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
    try {
      if (newPembelian['raw']['affectedRows'] > 0) {
        return {
          message: 'User has been added',
        };
      }
    } catch (error) {
      return {
        message: 'failed to add nota pembelian',
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
    const userUpdate = await this.notaPembelianRepository.update(
      id_pembelian,
      updateNotaPembelianDto,
    );
    try {
      return userUpdate;
    } catch (error) {
      message: 'No user update';
      return error.message;
    }
  }

  remove(id_pembelian: number) {
    return this.notaPembelianRepository.delete(id_pembelian);
  }
}
