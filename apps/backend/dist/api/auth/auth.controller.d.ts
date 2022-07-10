import { Response } from 'express';
export declare class AuthController {
    private readonly service;
    private register;
    private login;
    private refresh;
    logout(response: Response): {
        message: string;
    };
}
