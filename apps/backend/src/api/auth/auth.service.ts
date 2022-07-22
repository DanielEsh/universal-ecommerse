import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}

/**
 * curl -X POST http://localhost:8000/api/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
 */
