import { AuthService } from "@/api/auth/service/auth.service";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        accessToken: string;
    }>;
}
