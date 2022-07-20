import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }

        try {
            const request = context.switchToHttp().getRequest();
            const user = request.user;

            console.log('USER', user);

            return roles.some((role) => {
                return role === user.role;
            });
        } catch (e) {
            console.log('ERROR', e);
        }
    }
}
