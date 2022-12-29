import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDaftarJaketDto } from '../../dto/create-dto/create-daftar-jaket.dto';
import { UpdateDaftarJaketDto } from '../../dto/update-dto/update-daftar-jaket.dto';
import { DaftarBarang } from 'src/daftar-barang/entities/daftar-barang.entity';
import { Jaket } from '../../entities/daftar-jaket.entity';

@Injectable()
export class DaftarJaketService {
  constructor(
    @InjectRepository(DaftarBarang)
    private daftarBarangRepository: Repository<DaftarBarang>,
    @InjectRepository(Jaket) private jaketRepository: Repository<Jaket>,
  ) {}

  findAllJaket() {
    return this.daftarBarangRepository.find({
      relations: ['jaket'],
    });
  }

  async createJaket(
    id_barang: number,
    createJaketDetails: CreateDaftarJaketDto,
  ) {
    const daftarBarang = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!daftarBarang) {
      throw new HttpException(
        'daftar barang not found. Cannot create jaket',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newJaket = this.jaketRepository.create({
      ...createJaketDetails,
      daftarBarang,
    });
    return this.jaketRepository.save(newJaket);
  }

  async updateJaket(id_barang: number, updateJaket: UpdateDaftarJaketDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat mengupdate jaket',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idJaket = updateJaket.id_jaket;
    const findJaketId = await this.jaketRepository.findOne({
      where: { id_jaket: idJaket },
    });
    console.log(findJaketId);
    if (!findJaketId) {
      throw new HttpException(
        'Jaket tidak ditemukan. Tidak dapat mengupdate Jaket',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.jaketRepository.update(idJaket, updateJaket);
    return {
      message: 'Jaket berhasil diperbarui',
      Jaket: updateJaket,
    };
  }

  async removeJaket(id_barang: number, updateJaket: UpdateDaftarJaketDto) {
    const findBarangId = await this.daftarBarangRepository.findOneBy({
      id_barang,
    });
    if (!findBarangId) {
      throw new HttpException(
        'Barang tidak ditemukan. Tidak dapat menghapus jaket',
        HttpStatus.BAD_REQUEST,
      );
    }
    const idJaket = updateJaket.id_jaket;
    const findJaketId = await this.jaketRepository.findOne({
      where: { id_jaket: idJaket },
    });
    console.log(findJaketId);
    if (!findJaketId) {
      throw new HttpException(
        'Jaket tidak ditemukan. Tidak dapat menghapus jaket',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.jaketRepository.delete(idJaket);
    return {
      message: 'Jaket berhasil dihapus',
    };
  }
}
