import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from "@/api/auth/auth.service";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        console.log('USER', req.user);
        return this.authService.login(req.user);
    }
}
