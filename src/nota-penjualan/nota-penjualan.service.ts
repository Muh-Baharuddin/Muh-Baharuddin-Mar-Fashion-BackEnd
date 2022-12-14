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
    const newUser = await this.notaPembelianRepository.save(
      createNotaPenjualanDto,
    );
    try {
      if (newUser['raw']['affectedRows'] > 0) {
        return {
          message: 'User has been added',
          user: createNotaPenjualanDto,
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
    return this.notaPembelianRepository.find();
  }

  findOne(id_penjualan: number) {
    return this.notaPembelianRepository.findOneBy({ id_penjualan });
  }

  async update(
    id_penjualan: number,
    updateNotaPenjualanDto: UpdateNotaPenjualanDto,
  ) {
    const userUpdate = await this.notaPembelianRepository.update(
      id_penjualan,
      updateNotaPenjualanDto,
    );
    try {
      return userUpdate;
    } catch (error) {
      message: 'No user update';
      return error.message;
    }
  }

  remove(id_penjualan: number) {
    return this.notaPembelianRepository.delete(id_penjualan);
  }
}
