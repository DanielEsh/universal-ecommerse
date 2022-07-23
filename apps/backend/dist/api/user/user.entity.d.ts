import { BaseEntity } from 'typeorm';
import { Role } from "@/api/auth/roles.enum";
export declare class User extends BaseEntity {
    id: number;
    email: string;
    password: string;
    name: string | null;
    lastLoginAt: Date | null;
    roles: Role[];
}
