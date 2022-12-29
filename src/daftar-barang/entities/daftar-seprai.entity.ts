import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { DaftarBarang } from './daftar-barang.entity';

@Entity()
export class Seprai {
  @PrimaryGeneratedColumn()
  id_seprai: number;

  @Column()
  merek: string;

  @Column()
  size: string;

  @Column()
  harga: string;

  @Column()
  warna: string;

  @ManyToOne(() => DaftarBarang, (daftarBarang) => daftarBarang.seprai)
  daftarBarang: DaftarBarang;
}
