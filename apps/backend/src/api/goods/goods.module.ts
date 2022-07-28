import { Module } from '@nestjs/common';
import { GoodsService } from '@/api/goods/service/goods.service';
import { GoodsController } from '@/api/goods/controller/goods.controller';

@Module({
  controllers: [GoodsController],
  providers: [GoodsService],
})
export class GoodsModule {}
