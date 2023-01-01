import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturService } from './retur.service';
import { ReturController } from './retur.controller';
import { Retur } from './retur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Retur])],
  exports: [TypeOrmModule],
  controllers: [ReturController],
  providers: [ReturService]
})
export class ReturModule {}
