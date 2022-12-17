import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rok {
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