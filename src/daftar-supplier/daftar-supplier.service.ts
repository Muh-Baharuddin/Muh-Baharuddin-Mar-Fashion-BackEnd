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
    const newSupllier = await this.daftarSupplierRepository.save(
      createSupplierDto,
    );
    if (newSupllier) {
      return {
        message: 'data supplier berhasil ditambahkan',
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
    const supplierUpdate = await this.daftarSupplierRepository.update(
      id_supplier,
      updateSupplierDto,
    );
    if (supplierUpdate) {
      return {
        message: 'data supplier berhasil diperbarui',
      };
    }
  }

  remove(id_supplier: number) {
    const deleteSupplier = this.daftarSupplierRepository.delete(id_supplier);
    if (deleteSupplier) {
      return {
        message: 'data supplier berhasil dihapus',
      };
    }
  }
}
