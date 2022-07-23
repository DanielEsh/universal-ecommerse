import { UserService } from "@/api/user/service/user.service";
import { UpdateDto } from "@/api/user/dto/updateDto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAll(req: any): Promise<import("../user.entity").User[]>;
    getById(id: number): Promise<import("../user.entity").User>;
    updateById(id: number, body: UpdateDto): Promise<string>;
    getProfile(req: any): Promise<import("../user.entity").User>;
    guest(req: any): string;
    admin(req: any): string;
}
