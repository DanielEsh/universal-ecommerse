import { User } from '@/api/user/user.entity';
import { UpdateDto } from "@/api/user/dto/updateDto";
export declare class UserService {
    private readonly userRepository;
    findAll(): Promise<User[]>;
    findUserByEmailOrName(payload: string): Promise<User | undefined>;
    findById(id: number): Promise<User | undefined>;
    updateUserById(id: number, body: UpdateDto): Promise<User>;
    create(body: any): Promise<User | "Email/Password обязательные поля">;
    encodePassword(password: string): string;
    delete(id: number): Promise<{
        deleted: boolean;
    }>;
    updateRefreshTokenHash(userId: number, refreshToken: string): Promise<void>;
    hashData(data: string): Promise<string>;
}
