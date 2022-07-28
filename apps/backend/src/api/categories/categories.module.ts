import { Module } from '@nestjs/common';
import { CategoriesService } from '@/api/categories/service/categories.service';
import { CategoriesController } from '@/api/categories/controller/categories.controller';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
