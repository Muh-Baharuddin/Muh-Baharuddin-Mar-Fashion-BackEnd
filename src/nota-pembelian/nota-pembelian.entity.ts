import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { DaftarSupplier } from 'src/daftar-supplier/daftar-supplier.entity';

@Entity()
export class NotaPembelian {
  @PrimaryGeneratedColumn()
  id_pembelian: number;

  @Column()
  tanggal_pembelian: string;

  @Column()
  total_pengeluaran: string;

  @OneToMany(() => DaftarSupplier, (supplier) => supplier.notaPembelian)
  @JoinTable()
  suppliers: DaftarSupplier[];
}
