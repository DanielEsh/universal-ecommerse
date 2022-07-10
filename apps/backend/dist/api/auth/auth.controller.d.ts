import { Response } from 'express';
export declare class AuthController {
    private readonly service;
    private signUp;
    private signIn;
    private refresh;
    logout(response: Response): {
        message: string;
    };
}
