import { UserService } from '../../user/service/user.service';
import { User } from "@/api/user/user.entity";
import { Response } from "express";
export declare class AuthService {
    private usersService;
    constructor(usersService: UserService);
    private readonly authHelper;
    validateUser(username: string, pass: string): Promise<any>;
    signIn(user: User, res: Response): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(userId: number, refreshToken: string, res: Response): Promise<{
        accessToken: string;
    }>;
}
