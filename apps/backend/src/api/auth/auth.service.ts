import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@/api/user/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from "@/api/auth/dto/signUp.dto";
import { SignInDto } from "@/api/auth/dto/signIn.dto";
import { AuthHelper } from './auth.helper';

@Injectable()
export class AuthService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  @Inject(AuthHelper)
  private readonly authHelper: AuthHelper;

  public async signUp(body: SignUpDto): Promise<User | never> {
    const { name, email, password }: SignUpDto = body;
    let user: User = await this.userRepository.findOne({ where: { email } });

    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    user = new User();

    user.name = name;
    user.email = email;
    user.password = this.authHelper.encodePassword(password);

    return this.userRepository.save(user);
  }

  public async signIn(body: SignInDto) {
    const { email, password }: SignInDto = body;
    const user: User = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid: boolean = this.authHelper.isPasswordValid(
      password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }

    await this.userRepository.update(user.id, {lastLoginAt: new Date()});

    return {
      message: 'Success SignIn',
      token: this.authHelper.generateToken(user),
      user: user,
    };
  }

  public async refresh(user: User): Promise<string> {
    await this.userRepository.update(user.id, {lastLoginAt: new Date()});

    return this.authHelper.generateToken(user);
  }
}
