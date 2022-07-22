import {Controller, Get, Request, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "@/api/auth/jwt-auth.guard";
import {UserService} from "@/api/user/user.service";
import { Roles } from "@/api/auth/roles.decorator";
import { Role } from '@/api/auth/roles.enum';
import { RolesGuard } from "@/api/auth/roles.guard";

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        const { user } = req;
        return this.userService.findById(user.id);
    }

    @Get('guest')
    guest(@Request() req) {
        const { user } = req;
        return 'Guest route';
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get('admin')
    @Roles(Role.ADMIN)
    admin(@Request() req) {
        const { user } = req;
        return 'Admin route';
    }
}
