import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DataKeuangan {
  @PrimaryGeneratedColumn()
  id_dataKeuangan: number;

  @Column()
  tanggal: Date;

  @Column()
  pendapatan: number;

  @Column()
  pengeluaran: number;

  @Column()
  hasil: number;
}
