import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDaftarKelambuDto } from '../../dto/create-dto/create-daftar-kelambu.dto';
import { UpdateDaftarKelambuDto } from '../../dto/update-dto/update-daftar-kelambu.dto';
import { DaftarBarang } from 'src/daftar-barang/entities/daftar-barang.entity';
import { Kelambu } from '../../entities/daftar-kelambu.entity';

@Injectable()
export class DaftarKelambuService {
  constructor(
    @InjectRepository(DaftarBarang)
    private daftarBarangRepository: Repository<DaftarBarang>,
    @InjectRepository(Kelambu) private kelambuRepository: Repository<Kelambu>,
  ) {}

  findAllKelambu() {
    return this.daftarBarangRepository.find({
      relations: ['kelambu'],
    });
  }

  async createKelambu(
    id_barang: number,
    createKelambuDetails: CreateDaftarKelambuDto,
  ) {
    const daftarBarang = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!daftarBarang) {
      throw new HttpException(
        'daftar barang not found. Cannot create Kelambu',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newKelambu = this.kelambuRepository.create({
      ...createKelambuDetails,
      daftarBarang,
    });
    return this.kelambuRepository.save(newKelambu);
  }

  async updateKelambu(
    id_barang: number,
    updateKelambu: UpdateDaftarKelambuDto,
  ) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat mengupdate kelambu',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idKelambu = updateKelambu.id_kelambu;
    const findKelambuId = await this.kelambuRepository.findOne({
      where: { id_kelambu: idKelambu },
    });
    console.log(findKelambuId);
    if (!findKelambuId) {
      throw new HttpException(
        'Kelambu tidak ditemukan. Tidak dapat mengupdate kelambu',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.kelambuRepository.update(idKelambu, updateKelambu);
    return {
      message: 'Kelambu berhasil diperbarui',
      Kelambu: updateKelambu,
    };
  }

  async removeKelambu(
    id_barang: number,
    updateKelambu: UpdateDaftarKelambuDto,
  ) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat menghapus kelambu',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idKelambu = updateKelambu.id_kelambu;
    const findKelambuId = await this.kelambuRepository.findOne({
      where: { id_kelambu: idKelambu },
    });
    console.log(findKelambuId);
    if (!findKelambuId) {
      throw new HttpException(
        'Kelambu tidak ditemukan. Tidak dapat menghapus kelambu',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.kelambuRepository.delete(idKelambu);
    return {
      message: 'Kelambu berhasil dihapus',
    };
  }
}
