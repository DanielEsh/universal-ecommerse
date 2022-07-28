import { Module } from '@nestjs/common';
import { UserModule } from '@/api/user/user.module';
import { AuthModule } from '@/api/auth/auth.module';
import { GoodsModule } from '@/api/goods/goods.module';

@Module({
  imports: [UserModule, AuthModule, GoodsModule],
})
export class ApiModule {}
