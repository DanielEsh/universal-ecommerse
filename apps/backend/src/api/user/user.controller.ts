import {Controller, Get, Request, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "@/api/auth/jwt-auth.guard";
import {UserService} from "@/api/user/user.service";


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
}
