import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
declare const AccessJwtStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessJwtStrategy extends AccessJwtStrategy_base {
    private readonly authHelper;
    constructor(config: ConfigService);
    validate(payload: any): Promise<{
        id: any;
        name: any;
        email: any;
    }>;
}
export {};
