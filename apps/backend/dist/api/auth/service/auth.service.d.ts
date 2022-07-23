import { UserService } from '../../user/service/user.service';
import { User } from "@/api/user/user.entity";
export declare class AuthService {
    private usersService;
    constructor(usersService: UserService);
    private readonly authHelper;
    validateUser(username: string, pass: string): Promise<any>;
    login(user: User): Promise<{
        accessToken: string;
    }>;
}
