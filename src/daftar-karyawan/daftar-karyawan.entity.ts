import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DaftarKaryawan {
  @PrimaryGeneratedColumn()
  id_karyawan: number;

  @Column()
  nama: string;

  @Column()
  alamat: string;

  @Column()
  nomor_telpon: string;
}
