import { UserService } from "../../../src/api/user/service/user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getProfile(req: any): Promise<import("./user.entity").User>;
    guest(req: any): string;
    admin(req: any): string;
}
