import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaftarSupplier } from './daftar-supplier.entity';
import { CreateDaftarSupplierDto } from './dto/create-daftar-supplier.dto';
import { UpdateDaftarSupplierDto } from './dto/update-daftar-supplier.dto';

@Injectable()
export class DaftarSupplierService {
  constructor(
    @InjectRepository(DaftarSupplier)
    private daftarSupplierRepository: Repository<DaftarSupplier>,
  ) {}
  async create(createSupplierDto: CreateDaftarSupplierDto) {
    const newUser = await this.daftarSupplierRepository.save(createSupplierDto);
    try {
      if (newUser['raw']['affectedRows'] > 0) {
        return {
          message: 'User has been added',
          user: createSupplierDto,
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
    return this.daftarSupplierRepository.find();
  }

  findOne(id_supplier: number) {
    return this.daftarSupplierRepository.findOneBy({ id_supplier });
  }

  async update(
    id_supplier: number,
    updateSupplierDto: UpdateDaftarSupplierDto,
  ) {
    const userUpdate = await this.daftarSupplierRepository.update(
      id_supplier,
      updateSupplierDto,
    );
    try {
      return userUpdate;
    } catch (error) {
      message: 'No user update';
      return error.message;
    }
  }

  remove(id_supplier: number) {
    return this.daftarSupplierRepository.delete(id_supplier);
  }
}
