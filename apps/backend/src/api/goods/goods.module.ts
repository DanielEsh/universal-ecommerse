import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsService } from '@/api/goods/service/goods.service';
import { GoodsController } from '@/api/goods/controller/goods.controller';
import { Good } from '@/api/goods/entities/good.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Good])],
  controllers: [GoodsController],
  providers: [GoodsService],
  exports: [GoodsService],
})
export class GoodsModule {}
