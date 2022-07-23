import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { User } from '@/api/user/user.entity';
import { UpdateDto } from "@/api/user/dto/updateDto";

@Injectable()
export class UserService {
    @InjectRepository(User)
    private readonly userRepository: Repository<User>;

    async findAll() {
        return await this.userRepository.find();
    }

    async findUserByEmailOrName(payload: string): Promise<User | undefined> {
        return await this.userRepository.findOne({ where: { email: payload } }) || this.userRepository.findOne({ where: { name: payload } });
    }

    async findById(id: number): Promise<User | undefined> {
        return await this.userRepository.findOne({where: { id }});
    }

    public async updateUserById(id: number, body: UpdateDto) {
        const user = await this.findById(id)

        user.name = body?.name || user.name;
        user.email = body?.email || user.email;
        user.roles = body?.roles || user.roles;

        return this.userRepository.save(user);
    }
}
