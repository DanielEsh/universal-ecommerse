import { User } from '@/api/user/user.entity';
import { RegisterDto, LoginDto } from './auth.dto';
export declare class AuthService {
    private readonly repository;
    private readonly helper;
    register(body: RegisterDto): Promise<User | never>;
    login(body: LoginDto): Promise<string | never>;
    refresh(user: User): Promise<string>;
}
