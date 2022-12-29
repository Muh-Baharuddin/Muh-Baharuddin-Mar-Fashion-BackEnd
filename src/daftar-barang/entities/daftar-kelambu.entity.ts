import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { DaftarBarang } from './daftar-barang.entity';

@Entity()
export class Kelambu {
  @PrimaryGeneratedColumn()
  id_kelambu: number;

  @Column()
  merek: string;

  @Column()
  size: string;

  @Column()
  harga: string;

  @Column()
  warna: string;

  @ManyToOne(() => DaftarBarang, (daftarBarang) => daftarBarang.kelambu)
  daftarBarang: DaftarBarang;
}