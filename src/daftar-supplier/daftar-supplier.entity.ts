import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DaftarSupplier {
  @PrimaryGeneratedColumn()
  id_supplier: number;

  @Column()
  nama: string;

  @Column()
  alamat: string;

  @Column()
  nomor_telepon: string;
}
