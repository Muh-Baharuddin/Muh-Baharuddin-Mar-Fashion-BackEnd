import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DaftarBarangService } from './service/daftar-barang/daftar-barang.service';
import { DaftarBajuService } from './service/daftar-baju/daftar-baju.service';
import { DaftarCelanaService } from './service/daftar-celana/daftar-celana.service';
import { DaftarGamisService } from './service/daftar-gamis/daftar-gamis.service';
import { DaftarGordenService } from './service/daftar-gorden/daftar-gorden.service';
import { DaftarJaketService } from './service/daftar-jaket/daftar-jaket.service';
import { DaftarKelambuService } from './service/daftar-kelambu/daftar-kelambu.service';
import { DaftarKemejaService } from './service/daftar-kemeja/daftar-kemeja.service';
import { DaftarRokService } from './service/daftar-rok/daftar-rok.service';
import { DaftarSepraiService } from './service/daftar-seprai/daftar-seprai.service';
import { DaftarBarangController } from './controller/daftar-barang.controller';
import { DaftarBarang } from './entities/daftar-barang.entity';
import { Baju } from './entities/daftar-baju.entity';
import { Celana } from './entities/daftar-celana.entity';
import { Gamis } from './entities/daftar-gamis.entity';
import { Gorden } from './entities/daftar-gorden.entity';
import { Jaket } from './entities/daftar-jaket.entity';
import { Kelambu } from './entities/daftar-kelambu.entity';
import { kemeja } from './entities/daftar-kemeja.entity';
import { Rok } from './entities/daftar-rok.entity';
import { Seprai } from './entities/daftar-seprai.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DaftarBarang,
      Baju,
      Celana,
      Gamis,
      Gorden,
      Jaket,
      Kelambu,
      kemeja,
      Rok,
      Seprai,
    ]),
  ],
  exports: [TypeOrmModule],
  controllers: [DaftarBarangController],
  providers: [
    DaftarBarangService,
    DaftarBajuService,
    DaftarCelanaService,
    DaftarGamisService,
    DaftarGordenService,
    DaftarJaketService,
    DaftarKelambuService,
    DaftarKemejaService,
    DaftarRokService,
    DaftarSepraiService,
  ],
})
export class DaftarBarangModule {}
