import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { DaftarBarang } from './daftar-barang.entity';

@Entity()
export class Gorden {
  @PrimaryGeneratedColumn()
  id_gorden: number;

  @Column()
  merek: string;

  @Column()
  size: string;

  @Column()
  harga: string;

  @Column()
  warna: string;

  @Column()
  stok: number;

  @ManyToOne(() => DaftarBarang, (daftarBarang) => daftarBarang.gorden)
  daftarBarang: DaftarBarang;
}
