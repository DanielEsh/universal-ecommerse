import {Controller, Get, Put, Param, Body, Request, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "@/api/auth/guards/jwt-auth.guard";
import {UserService} from "@/api/user/service/user.service";
import { Roles } from "@/api/auth/roles.decorator";
import { Role } from '@/api/auth/roles.enum';
import { RolesGuard } from "@/api/auth/guards/roles.guard";
import { UpdateDto } from "@/api/user/dto/updateDto";

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('all')
    getAll(@Request() req) {
        return this.userService.findAll();
    }

    @Get(':id')
    getById(
        @Param('id') id: number,
    ) {
        return this.userService.findById(id)
    }

    @Put(':id')
    async updateById(
        @Param('id') id: number,
        @Body() body: UpdateDto
    ) {
        await this.userService.updateUserById(id, body);
        return 'Success update';
    }


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
