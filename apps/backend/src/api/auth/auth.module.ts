import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '@/api/auth/controller/auth.controller';
import { AuthService } from '@/api/auth/service/auth.service';
import { AuthHelper } from "@/api/auth/helpers/auth.helper";
import { LocalStrategy } from '@/api/auth/strategy/local.strategy';
import { AccessJwtStrategy } from '@/api/auth/strategy/accessJwt.strategy';
import { RefreshJwtStrategy } from "@/api/auth/strategy/refreshJwt.strategy";
import { UserModule } from '@/api/user/user.module'
import { User } from "@/api/user/user.entity";

@Module({
  imports: [
    UserModule,
    PassportModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({}),
  ],
  providers: [AuthService, AuthHelper, LocalStrategy, AccessJwtStrategy, RefreshJwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
