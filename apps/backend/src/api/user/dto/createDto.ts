import {Role} from "@/api/auth/roles.enum";

export class CreateDto {
    public readonly name: string;
    public readonly email: string;
    public readonly password: string;
    public readonly roles?: [Role];
}
