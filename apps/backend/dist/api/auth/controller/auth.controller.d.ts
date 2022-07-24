import { Response } from "express";
import { AuthService } from "@/api/auth/service/auth.service";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(req: any, res: Response): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    private refresh;
    private logOut;
}
