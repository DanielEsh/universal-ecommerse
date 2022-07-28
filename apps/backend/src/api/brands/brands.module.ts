import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandsService } from '@/api/brands/service/brands.service';
import { BrandsController } from '@/api/brands/controller/brands.controller';
import { Brand } from '@/api/brands/entities/brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  controllers: [BrandsController],
  exports: [BrandsService],
  providers: [BrandsService],
})
export class BrandsModule {}
