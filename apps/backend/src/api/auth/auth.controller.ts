import { Body, Controller, Inject, Post, Get, UseGuards, Req, Res } from '@nestjs/common';
import { User } from '@/api/user/user.entity';
import { SignInDto } from "@/api/auth/dto/signIn.dto";
import { SignUpDto } from "@/api/auth/dto/signUp.dto";
import { JwtAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import {cookieOptions} from "@/utils/cookie";

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @Post('signUp')
  private signUp(@Body() body: SignUpDto): Promise<User | never> {
    return this.service.signUp(body);
  }

  @Post('signIn')
  private async signIn(
      @Body() body: SignInDto,
      @Res({ passthrough: true }) response: Response,
  ) {
    const {token, user} = await this.service.signIn(body);
    const { id, name, email } = user;
    response.cookie('token', token, cookieOptions);

    return {
      message: 'Success login',
      token: token,
      user: {
        id,
        name,
        email,
      },
    }
  }

  @Post('refresh')
  @UseGuards(JwtAuthGuard)
  private refresh(@Req() { user }: Request): Promise<string | never> {
    return this.service.refresh(<User>user);
  }

  @Get('logout')
  logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('token');

    return {
      message: 'Logged out successfully'
    };
  }
}
