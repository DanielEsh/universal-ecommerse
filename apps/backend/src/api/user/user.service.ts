import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UserService {
    private readonly users = [
        {
            id: 1,
            name: 'john',
            email: 'john@mail.ru',
            password: 'changeme',
        },
        {
            id: 2,
            name: 'maria',
            email: 'maria@mail.ru',
            password: 'guess',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.name === username) || this.users.find(user => user.email === username);
    }
}
