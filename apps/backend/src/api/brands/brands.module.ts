import { Module } from '@nestjs/common';
import { BrandsService } from '@/api/brands/service/brands.service';
import { BrandsController } from '@/api/brands/controller/brands.controller';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
