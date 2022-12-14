import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NotaPembelian {
  @PrimaryGeneratedColumn()
  id_pembelian: number;

  @Column()
  tanggal_pembelian: string;
}
