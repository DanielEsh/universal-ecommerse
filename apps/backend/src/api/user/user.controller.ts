import { Controller, Req, Param, UseGuards, Put, Get, Body, Inject } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/auth.guard';
import { UpdateNameDto } from './user.dto';
import { User } from '@/api/user/user.entity';
import { UserService } from './user.service';
import {Roles} from "@/api/user/role.decorator";
import {Role} from "@/api/user/role.enum";
import {RolesGuard} from "@/api/user/role.guard";

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Put('name')
  @UseGuards(JwtAuthGuard)
  private updateName(
    @Body() body: UpdateNameDto,
    @Req() req: Request,
  ): Promise<User> {
    return this.service.updateName(body, req);
  }

  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  findOne(@Param('id') id: string) {
    return `find user by id, ${id}`;
  }
}
