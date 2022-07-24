import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
declare type JwtPayload = {
    sub: string;
    name: string;
};
declare const AccessJwtStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessJwtStrategy extends AccessJwtStrategy_base {
    private readonly helper;
    constructor(config: ConfigService);
    validate(payload: JwtPayload): Promise<{
        id: string;
        name: string;
    }>;
}
export {};
