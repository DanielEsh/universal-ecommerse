import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthHelper } from "@/api/auth/helpers/auth.helper";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "@/api/user/user.entity";

@Module({
  imports: [
    UserModule,
    PassportModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, AuthHelper, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
