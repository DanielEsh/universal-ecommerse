import { JwtService } from '@nestjs/jwt';
import { User } from '@/api/user/user.entity';
export declare class AuthHelper {
    private readonly userRepository;
    private readonly jwt;
    constructor(jwt: JwtService);
    decode(token: string): Promise<unknown>;
    validateUser(decoded: any): Promise<User>;
    generateToken(user: User): string;
    isPasswordValid(password: string, userPassword: string): boolean;
    encodePassword(password: string): string;
    private validate;
}
