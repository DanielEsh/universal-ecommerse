import { User } from '@/api/user/user.entity';
import { UpdateDto } from "@/api/user/dto/updateDto";
export declare class UserService {
    private readonly userRepository;
    findAll(): Promise<User[]>;
    findUserByEmailOrName(payload: string): Promise<User | undefined>;
    findById(id: number): Promise<User | undefined>;
    updateUserById(id: number, body: UpdateDto): Promise<User>;
}
