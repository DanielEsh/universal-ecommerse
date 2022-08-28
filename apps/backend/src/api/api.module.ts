import { Module } from '@nestjs/common';
import { UserModule } from '@/api/user/user.module';
import { AuthModule } from '@/api/auth/auth.module';
import { GoodsModule } from '@/api/goods/goods.module';
import { CategoriesModule } from '@/api/categories/categories.module';
import { BrandsModule } from '@/api/brands/brands.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    GoodsModule,
    CategoriesModule,
    BrandsModule,
  ],
})
export class ApiModule {}
