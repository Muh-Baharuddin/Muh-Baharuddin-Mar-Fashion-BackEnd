import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { DaftarBarang } from './daftar-barang.entity';

@Entity()
export class Baju {
  @PrimaryGeneratedColumn()
  id_baju: number;

  @Column()
  merek: string;

  @Column()
  size: string;

  @Column()
  harga: string;

  @Column()
  warna: string;

  @ManyToOne(() => DaftarBarang, (daftarBarang) => daftarBarang.baju)
  daftarBarang: DaftarBarang;
}