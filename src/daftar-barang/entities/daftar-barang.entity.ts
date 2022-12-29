import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Baju } from './daftar-baju.entity';
import { Celana } from './daftar-celana.entity';
import { Gamis } from './daftar-gamis.entity';
import { Gorden } from './daftar-gorden.entity';
import { Jaket } from './daftar-jaket.entity';
import { Kelambu } from './daftar-kelambu.entity';
import { kemeja } from './daftar-kemeja.entity';
import { Rok } from './daftar-rok.entity';
import { Seprai } from './daftar-seprai.entity';

@Entity()
export class DaftarBarang {
  @PrimaryGeneratedColumn()
  id_barang: number;

  @Column()
  barang: string;

  @OneToMany(() => Baju, (baju) => baju.daftarBarang, { cascade: true })
  baju: Baju[];

  @OneToMany(() => Celana, (celana) => celana.daftarBarang, { cascade: true })
  celana: Celana[];

  @OneToMany(() => Gamis, (gamis) => gamis.daftarBarang, { cascade: true })
  gamis: Gamis[];

  @OneToMany(() => Gorden, (gorden) => gorden.daftarBarang, { cascade: true })
  gorden: Gorden[];

  @OneToMany(() => Jaket, (jaket) => jaket.daftarBarang, { cascade: true })
  jaket: Jaket[];

  @OneToMany(() => Kelambu, (kelambu) => kelambu.daftarBarang, {
    cascade: true,
  })
  kelambu: Kelambu[];

  @OneToMany(() => kemeja, (kemeja) => kemeja.daftarBarang, { cascade: true })
  kemeja: kemeja[];

  @OneToMany(() => Rok, (rok) => rok.daftarBarang, { cascade: true })
  rok: Rok[];

  @OneToMany(() => Seprai, (seprai) => seprai.daftarBarang, { cascade: true })
  seprai: Seprai[];
}
