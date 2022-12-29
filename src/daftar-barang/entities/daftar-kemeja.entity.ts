import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { DaftarBarang } from './daftar-barang.entity';

@Entity()
export class kemeja {
  @PrimaryGeneratedColumn()
  id_kemeja: number;

  @Column()
  merek: string;

  @Column()
  size: string;

  @Column()
  harga: string;

  @Column()
  warna: string;

  @ManyToOne(() => DaftarBarang, (daftarBarang) => daftarBarang.kemeja)
  daftarBarang: DaftarBarang;
}