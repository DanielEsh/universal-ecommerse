import { UserService } from "@/api/user/service/user.service";
import { UpdateDto } from "@/api/user/dto/updateDto";
import { CreateDto } from "@/api/user/dto/createDto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAll(req: any): Promise<import("../user.entity").User[]>;
    create(body: CreateDto): Promise<import("../user.entity").User | "Email/Password обязательные поля">;
    getById(id: number): Promise<import("../user.entity").User>;
    updateById(id: number, body: UpdateDto): Promise<string>;
    getProfile(req: any): Promise<import("../user.entity").User>;
    guest(req: any): string;
    admin(req: any): string;
}
