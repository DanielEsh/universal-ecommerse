import { Role } from "@/api/auth/roles.enum";
export declare class UpdateDto {
    readonly name?: string;
    readonly email?: string;
    readonly roles?: [Role];
}
