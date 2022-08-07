import { HttpStatus } from '@nestjs/common';
import { UserService } from '@/api/user/service/user.service';
import { UpdateDto } from '@/api/user/dto/updateDto';
import { CreateDto } from '@/api/user/dto/createDto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAll(req: any): Promise<import("../user.entity").User[]>;
    create(body: CreateDto): Promise<import("../user.entity").User | "Email/Password обязательные поля">;
    updateById(id: number, body: UpdateDto): Promise<string>;
    deleteUser(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    getProfile(req: any): string;
    guest(): string;
    admin(req: any): string;
    getById(id: number): Promise<import("../user.entity").User>;
}
