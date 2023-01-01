import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { DaftarBarang } from './daftar-barang.entity';

@Entity()
export class Rok {
  @PrimaryGeneratedColumn()
  id_rok: number;

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

  @ManyToOne(() => DaftarBarang, (daftarBarang) => daftarBarang.rok)
  daftarBarang: DaftarBarang;
}