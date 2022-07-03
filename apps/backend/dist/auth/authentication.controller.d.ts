import { Response } from 'express';
import { AuthenticationService } from './authentication.service';
import RegisterDto from './dto/register.dto';
import RequestWithUser from './requestWithUser.interface';
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    register(registrationData: RegisterDto): Promise<import("../users/entities/user.entity").User>;
    logIn(request: RequestWithUser, response: Response): Promise<Response<any, Record<string, any>>>;
    logOut(response: Response): Promise<Response<any, Record<string, any>>>;
    authenticate(request: RequestWithUser): User;
}
