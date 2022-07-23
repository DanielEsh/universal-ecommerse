import { User } from '@/api/user/user.entity';
export declare class UserService {
    private readonly userRepository;
    findUserByEmailOrName(payload: string): Promise<User | undefined>;
    findById(id: number): Promise<User | undefined>;
}
