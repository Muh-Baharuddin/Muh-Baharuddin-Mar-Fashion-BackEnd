import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DaftarBarang {
  @PrimaryGeneratedColumn()
  id_barang: number;
}

