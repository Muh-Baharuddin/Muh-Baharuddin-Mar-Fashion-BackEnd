import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { NotaPembelian } from 'src/data-keuangan/entities/nota-pembelian.entity';

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

  @ManyToOne(() => NotaPembelian, (Pembelian) => Pembelian.suppliers)
  notaPembelian: NotaPembelian;
}
