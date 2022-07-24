import { JwtService } from '@nestjs/jwt';
import { User } from '@/api/user/user.entity';
import { ConfigService } from '@nestjs/config';
export declare class AuthHelper {
    private readonly userRepository;
    private readonly jwt;
    private readonly config;
    constructor(jwt: JwtService, config: ConfigService);
    decode(token: string): Promise<unknown>;
    validateUser(decoded: any): Promise<User>;
    generateAccessToken(user: User): string;
    generateRefreshToken(user: User): string;
    isPasswordValid(password: string, userPassword: string): boolean;
    encodePassword(password: string): string;
    private validate;
}
