import { Request } from 'express';
import { UpdateNameDto } from './user.dto';
import { User } from './user.entity';
export declare class UserService {
    private readonly repository;
    updateName(body: UpdateNameDto, req: Request): Promise<User>;
}
