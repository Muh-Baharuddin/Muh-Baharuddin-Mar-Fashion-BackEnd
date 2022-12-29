import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { DaftarBarang } from './daftar-barang.entity';

@Entity()
export class Celana {
  @PrimaryGeneratedColumn()
  id_celana: number;

  @Column()
  merek: string;

  @Column()
  size: string;

  @Column()
  harga: string;

  @Column()
  warna: string;

  @ManyToOne(() => DaftarBarang, (daftarBarang) => daftarBarang.celana)
  daftarBarang: DaftarBarang;
}
