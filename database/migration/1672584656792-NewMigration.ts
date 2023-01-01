import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1672584656792 implements MigrationInterface {
    name = 'NewMigration1672584656792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "nota_pembelian" ("id_pembelian" SERIAL NOT NULL, "list_barang" character varying NOT NULL, "tanggal_pembelian" TIMESTAMP NOT NULL, "total_pengeluaran" character varying NOT NULL, CONSTRAINT "PK_59bdfeb99c4d0b8dc4571bceb2a" PRIMARY KEY ("id_pembelian"))`);
        await queryRunner.query(`CREATE TABLE "daftar_supplier" ("id_supplier" SERIAL NOT NULL, "nama" character varying NOT NULL, "alamat" character varying NOT NULL, "nomor_telepon" character varying NOT NULL, "notaPembelianIdPembelian" integer, CONSTRAINT "PK_c15a9e50cca285c744913222e2a" PRIMARY KEY ("id_supplier"))`);
        await queryRunner.query(`CREATE TABLE "daftar_karyawan" ("id_karyawan" SERIAL NOT NULL, "nama" character varying NOT NULL, "alamat" character varying NOT NULL, "nomor_telepon" character varying NOT NULL, CONSTRAINT "PK_532acb472984b5e05c48e4bcb7a" PRIMARY KEY ("id_karyawan"))`);
        await queryRunner.query(`CREATE TABLE "retur" ("id_retur" SERIAL NOT NULL, "barang" character varying NOT NULL, "tanngal_retur" character varying NOT NULL, "Keterangan" character varying, CONSTRAINT "PK_f1e029eac2a51b650f5909053fe" PRIMARY KEY ("id_retur"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'karyawan')`);
        await queryRunner.query(`CREATE TABLE "user" ("id_user" SERIAL NOT NULL, "userName" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL DEFAULT 'karyawan', CONSTRAINT "UQ_da5934070b5f2726ebfd3122c80" UNIQUE ("userName"), CONSTRAINT "PK_9664961c0264d34a3cf82b11700" PRIMARY KEY ("id_user"))`);
        await queryRunner.query(`CREATE TABLE "celana" ("id_celana" SERIAL NOT NULL, "merek" character varying NOT NULL, "size" character varying NOT NULL, "harga" character varying NOT NULL, "warna" character varying NOT NULL, "stok" integer NOT NULL, "daftarBarangIdBarang" integer, CONSTRAINT "PK_149c7cc3b8cbdbb165ed27aee8d" PRIMARY KEY ("id_celana"))`);
        await queryRunner.query(`CREATE TABLE "gamis" ("id_gamis" SERIAL NOT NULL, "merek" character varying NOT NULL, "size" character varying NOT NULL, "harga" character varying NOT NULL, "warna" character varying NOT NULL, "stok" integer NOT NULL, "daftarBarangIdBarang" integer, CONSTRAINT "PK_be3bda9ca8178f2a084e4dd2773" PRIMARY KEY ("id_gamis"))`);
        await queryRunner.query(`CREATE TABLE "gorden" ("id_gorden" SERIAL NOT NULL, "merek" character varying NOT NULL, "size" character varying NOT NULL, "harga" character varying NOT NULL, "warna" character varying NOT NULL, "stok" integer NOT NULL, "daftarBarangIdBarang" integer, CONSTRAINT "PK_5b6147db4da6db832c5b1f842ec" PRIMARY KEY ("id_gorden"))`);
        await queryRunner.query(`CREATE TABLE "jaket" ("id_jaket" SERIAL NOT NULL, "merek" character varying NOT NULL, "size" character varying NOT NULL, "harga" character varying NOT NULL, "warna" character varying NOT NULL, "stok" integer NOT NULL, "daftarBarangIdBarang" integer, CONSTRAINT "PK_da20f3da3286bd2b7583ae245f3" PRIMARY KEY ("id_jaket"))`);
        await queryRunner.query(`CREATE TABLE "kelambu" ("id_kelambu" SERIAL NOT NULL, "merek" character varying NOT NULL, "size" character varying NOT NULL, "harga" character varying NOT NULL, "warna" character varying NOT NULL, "stok" integer NOT NULL, "daftarBarangIdBarang" integer, CONSTRAINT "PK_3537ca74bbb74c6f480929d44aa" PRIMARY KEY ("id_kelambu"))`);
        await queryRunner.query(`CREATE TABLE "kemeja" ("id_kemeja" SERIAL NOT NULL, "merek" character varying NOT NULL, "size" character varying NOT NULL, "harga" character varying NOT NULL, "warna" character varying NOT NULL, "stok" integer NOT NULL, "daftarBarangIdBarang" integer, CONSTRAINT "PK_37653bcc0d5a5622bb3a227dd8e" PRIMARY KEY ("id_kemeja"))`);
        await queryRunner.query(`CREATE TABLE "rok" ("id_rok" SERIAL NOT NULL, "merek" character varying NOT NULL, "size" character varying NOT NULL, "harga" character varying NOT NULL, "warna" character varying NOT NULL, "stok" integer NOT NULL, "daftarBarangIdBarang" integer, CONSTRAINT "PK_909edea71e9eb8cbe846ba919c7" PRIMARY KEY ("id_rok"))`);
        await queryRunner.query(`CREATE TABLE "seprai" ("id_seprai" SERIAL NOT NULL, "merek" character varying NOT NULL, "size" character varying NOT NULL, "harga" character varying NOT NULL, "warna" character varying NOT NULL, "stok" integer NOT NULL, "daftarBarangIdBarang" integer, CONSTRAINT "PK_3282aa991fc62a7e1c6764df0b2" PRIMARY KEY ("id_seprai"))`);
        await queryRunner.query(`CREATE TABLE "daftar_barang" ("id_barang" SERIAL NOT NULL, "barang" character varying NOT NULL, CONSTRAINT "PK_b3d396ddbf9c05f0a9d46af858f" PRIMARY KEY ("id_barang"))`);
        await queryRunner.query(`CREATE TABLE "baju" ("id_baju" SERIAL NOT NULL, "merek" character varying NOT NULL, "size" character varying NOT NULL, "harga" character varying NOT NULL, "warna" character varying NOT NULL, "stok" integer NOT NULL, "daftarBarangIdBarang" integer, CONSTRAINT "PK_c6c68845cf139122956d79a7970" PRIMARY KEY ("id_baju"))`);
        await queryRunner.query(`CREATE TABLE "data_keuangan" ("id_dataKeuangan" SERIAL NOT NULL, "tanggal" TIMESTAMP NOT NULL, "pendapatan" integer NOT NULL, "pengeluaran" integer NOT NULL, "hasil" integer NOT NULL, CONSTRAINT "PK_21d4e1f0420a7b274ddb26e10eb" PRIMARY KEY ("id_dataKeuangan"))`);
        await queryRunner.query(`CREATE TABLE "nota_penjualan" ("id_penjualan" SERIAL NOT NULL, "tanggal_penjualan" TIMESTAMP NOT NULL, CONSTRAINT "PK_c6a75965ed3f2fffe143789fcf6" PRIMARY KEY ("id_penjualan"))`);
        await queryRunner.query(`ALTER TABLE "daftar_supplier" ADD CONSTRAINT "FK_441db8f0707b8e46b4a15a41b20" FOREIGN KEY ("notaPembelianIdPembelian") REFERENCES "nota_pembelian"("id_pembelian") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "celana" ADD CONSTRAINT "FK_ce4b952f27414670785efe7af35" FOREIGN KEY ("daftarBarangIdBarang") REFERENCES "daftar_barang"("id_barang") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gamis" ADD CONSTRAINT "FK_183b942604b97f5124cb71a9b29" FOREIGN KEY ("daftarBarangIdBarang") REFERENCES "daftar_barang"("id_barang") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gorden" ADD CONSTRAINT "FK_2f71d4eed374bf570ba5a36c9fa" FOREIGN KEY ("daftarBarangIdBarang") REFERENCES "daftar_barang"("id_barang") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jaket" ADD CONSTRAINT "FK_1f775fd8411b64c56cc22135995" FOREIGN KEY ("daftarBarangIdBarang") REFERENCES "daftar_barang"("id_barang") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "kelambu" ADD CONSTRAINT "FK_a25d50ea46595369e2167528af6" FOREIGN KEY ("daftarBarangIdBarang") REFERENCES "daftar_barang"("id_barang") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "kemeja" ADD CONSTRAINT "FK_1643f5a67471a11c253a90d6991" FOREIGN KEY ("daftarBarangIdBarang") REFERENCES "daftar_barang"("id_barang") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rok" ADD CONSTRAINT "FK_fab19ccecb37d57fdb27f0860d1" FOREIGN KEY ("daftarBarangIdBarang") REFERENCES "daftar_barang"("id_barang") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seprai" ADD CONSTRAINT "FK_0621b3eca17042ea0d42adf5e92" FOREIGN KEY ("daftarBarangIdBarang") REFERENCES "daftar_barang"("id_barang") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "baju" ADD CONSTRAINT "FK_eef3491f0e052f37b2eea95f676" FOREIGN KEY ("daftarBarangIdBarang") REFERENCES "daftar_barang"("id_barang") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "baju" DROP CONSTRAINT "FK_eef3491f0e052f37b2eea95f676"`);
        await queryRunner.query(`ALTER TABLE "seprai" DROP CONSTRAINT "FK_0621b3eca17042ea0d42adf5e92"`);
        await queryRunner.query(`ALTER TABLE "rok" DROP CONSTRAINT "FK_fab19ccecb37d57fdb27f0860d1"`);
        await queryRunner.query(`ALTER TABLE "kemeja" DROP CONSTRAINT "FK_1643f5a67471a11c253a90d6991"`);
        await queryRunner.query(`ALTER TABLE "kelambu" DROP CONSTRAINT "FK_a25d50ea46595369e2167528af6"`);
        await queryRunner.query(`ALTER TABLE "jaket" DROP CONSTRAINT "FK_1f775fd8411b64c56cc22135995"`);
        await queryRunner.query(`ALTER TABLE "gorden" DROP CONSTRAINT "FK_2f71d4eed374bf570ba5a36c9fa"`);
        await queryRunner.query(`ALTER TABLE "gamis" DROP CONSTRAINT "FK_183b942604b97f5124cb71a9b29"`);
        await queryRunner.query(`ALTER TABLE "celana" DROP CONSTRAINT "FK_ce4b952f27414670785efe7af35"`);
        await queryRunner.query(`ALTER TABLE "daftar_supplier" DROP CONSTRAINT "FK_441db8f0707b8e46b4a15a41b20"`);
        await queryRunner.query(`DROP TABLE "nota_penjualan"`);
        await queryRunner.query(`DROP TABLE "data_keuangan"`);
        await queryRunner.query(`DROP TABLE "baju"`);
        await queryRunner.query(`DROP TABLE "daftar_barang"`);
        await queryRunner.query(`DROP TABLE "seprai"`);
        await queryRunner.query(`DROP TABLE "rok"`);
        await queryRunner.query(`DROP TABLE "kemeja"`);
        await queryRunner.query(`DROP TABLE "kelambu"`);
        await queryRunner.query(`DROP TABLE "jaket"`);
        await queryRunner.query(`DROP TABLE "gorden"`);
        await queryRunner.query(`DROP TABLE "gamis"`);
        await queryRunner.query(`DROP TABLE "celana"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`DROP TABLE "retur"`);
        await queryRunner.query(`DROP TABLE "daftar_karyawan"`);
        await queryRunner.query(`DROP TABLE "daftar_supplier"`);
        await queryRunner.query(`DROP TABLE "nota_pembelian"`);
    }

}
