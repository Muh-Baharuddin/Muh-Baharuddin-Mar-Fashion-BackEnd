import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NotaPenjualan {
  @PrimaryGeneratedColumn()
  id_penjualan: number;

  @Column()
  tanggal_penjualan: Date;
}
