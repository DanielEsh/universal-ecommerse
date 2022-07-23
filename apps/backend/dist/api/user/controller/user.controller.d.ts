import { UserService } from "@/api/user/service/user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAll(req: any): Promise<import("../user.entity").User[]>;
    getProfile(req: any): Promise<import("../user.entity").User>;
    guest(req: any): string;
    admin(req: any): string;
}
