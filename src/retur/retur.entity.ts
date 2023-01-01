import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Retur {
  @PrimaryGeneratedColumn()
  id_retur: number;

  @Column()
  barang: string;

  @Column()
  tanngal_retur: string;

  @Column({ nullable: true })
  Keterangan: string;
}
