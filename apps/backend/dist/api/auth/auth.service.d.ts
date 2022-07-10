import { User } from '@/api/user/user.entity';
import { SignUpDto } from "@/api/auth/dto/signUp.dto";
import { SignInDto } from "@/api/auth/dto/signIn.dto";
export declare class AuthService {
    private readonly userRepository;
    private readonly authHelper;
    signUp(body: SignUpDto): Promise<User | never>;
    signIn(body: SignInDto): Promise<{
        message: string;
        token: string;
        user: User;
    }>;
    refresh(user: User): Promise<string>;
}
