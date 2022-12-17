import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Kelambu {
  @PrimaryGeneratedColumn()
  id_barang: number;

  @Column()
  merek: string;

  @Column()
  size: string;

  @Column()
  harga: string;

  @Column()
  warna: string;
}