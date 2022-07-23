import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/api/user/user.entity';

@Injectable()
export class UserService {
    @InjectRepository(User)
    private readonly userRepository: Repository<User>;

    async findUserByEmailOrName(payload: string): Promise<User | undefined> {
        return await this.userRepository.findOne({ where: { email: payload } }) || this.userRepository.findOne({ where: { name: payload } });
    }

    async findById(id: number): Promise<User | undefined> {
        return await this.userRepository.findOne({where: { id }});
    }
}
