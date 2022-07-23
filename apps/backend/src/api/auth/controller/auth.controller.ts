import { Controller, Req, Res, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from "@/api/auth/service/auth.service";
import { Response } from "express";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @UseGuards(AuthGuard('local'))
    @Post('signIn')
    async signIn(
        @Req() req,
        @Res({ passthrough: true }) res: Response,
    ) {
        return this.authService.signIn(req.user, res);
    }
}
