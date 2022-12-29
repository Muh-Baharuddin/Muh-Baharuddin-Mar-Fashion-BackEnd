import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDaftarSepraiDto } from 'src/daftar-barang/dto/create-dto/create-daftar-seprai.dto';
import { UpdateDaftarSepraiDto } from '../../dto/update-dto/update-daftar-seprai.dto';
import { DaftarBarang } from 'src/daftar-barang/entities/daftar-barang.entity';
import { Seprai } from 'src/daftar-barang/entities/daftar-seprai.entity';

@Injectable()
export class DaftarSepraiService {
  constructor(
    @InjectRepository(DaftarBarang)
    private daftarBarangRepository: Repository<DaftarBarang>,
    @InjectRepository(Seprai) private sepraiRepository: Repository<Seprai>,
  ) {}

  findAllSeprai() {
    return this.daftarBarangRepository.find({
      relations: ['seprai'],
    });
  }

  async createSeprai(
    id_barang: number,
    createSepraiDetails: CreateDaftarSepraiDto,
  ) {
    const daftarBarang = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!daftarBarang) {
      throw new HttpException(
        'daftar barang not found. Cannot create seprai',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newSeprai = this.sepraiRepository.create({
      ...createSepraiDetails,
      daftarBarang,
    });
    return this.sepraiRepository.save(newSeprai);
  }

  findOne(id_barang: number) {
    return this.daftarBarangRepository.findOneBy({ id_barang });
  }

  async updateSeprai(id_barang: number, updateSeprai: UpdateDaftarSepraiDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat mengupdate seprai',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idSeprai = updateSeprai.id_seprai;
    const findSepraiId = await this.sepraiRepository.findOne({
      where: { id_seprai: idSeprai },
    });
    console.log(findSepraiId);
    if (!findSepraiId) {
      throw new HttpException(
        'Seprai tidak ditemukan. Tidak dapat mengupdate seprai',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.sepraiRepository.update(idSeprai, updateSeprai);
    return {
      message: 'Seprai berhasil diperbarui',
      seprai: updateSeprai,
    };
  }

  async removeSeprai(id_barang: number, updateSeprai: UpdateDaftarSepraiDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat menghapus seprai',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idSeprai = updateSeprai.id_seprai;
    const findSepraiId = await this.sepraiRepository.findOne({
      where: { id_seprai: idSeprai },
    });
    console.log(findSepraiId);
    if (!findSepraiId) {
      throw new HttpException(
        'Seprai tidak ditemukan. Tidak dapat menghapus seprai',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.sepraiRepository.delete(idSeprai);
    return {
      message: 'Seprai berhasil dihapus',
    };
  }
}
