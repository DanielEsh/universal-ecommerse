import { Body, Controller, Inject, Post, UseGuards, Req, Res } from '@nestjs/common';
import { User } from '@/api/user/user.entity';
import { RegisterDto, LoginDto } from './auth.dto';
import { JwtAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import {cookieOptions} from "@/utils/cookie";

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @Post('register')
  private register(@Body() body: RegisterDto): Promise<User | never> {
    return this.service.register(body);
  }

  @Post('login')
  private async login(
      @Body() body: LoginDto,
      @Res({ passthrough: true }) response: Response,
  ) {
    const {token, user} = await this.service.login(body);
    response.cookie('token', token, cookieOptions);

    return {
      message: 'Success login',
      user: user,
    }
  }

  @Post('refresh')
  @UseGuards(JwtAuthGuard)
  private refresh(@Req() { user }: Request): Promise<string | never> {
    return this.service.refresh(<User>user);
  }
}
