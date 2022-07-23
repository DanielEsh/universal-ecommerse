import { Role } from "@/api/auth/roles.enum";
export declare class CreateDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly roles?: [Role];
}
