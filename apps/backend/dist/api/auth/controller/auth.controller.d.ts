import { AuthService } from "@/api/auth/service/auth.service";
import { Response } from "express";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(req: any, res: Response): Promise<{
        accessToken: string;
    }>;
}
