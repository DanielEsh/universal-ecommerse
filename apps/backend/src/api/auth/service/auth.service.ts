import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import {AuthHelper} from "@/api/auth/helpers/auth.helper";
import {User} from "@/api/user/user.entity";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
    ) {}

    @Inject(AuthHelper)
    private readonly authHelper: AuthHelper;

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findUserByEmailOrName(username);

        if (!user) {
            throw new HttpException('No user found', HttpStatus.NOT_FOUND);
        }

        const isPasswordValid: boolean = this.authHelper.isPasswordValid(
            pass,
            user.password,
        );

        if (!isPasswordValid) {
            throw new HttpException('password is not valid', HttpStatus.NOT_FOUND);
        }

        const {
            password,
            lastLoginAt,
            ...result
        } = user;

        return result;
    }

    async login(user: User) {
        return {
            accessToken: this.authHelper.generateToken(user),
        };
    }
}
