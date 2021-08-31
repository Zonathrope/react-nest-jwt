import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { User } from "../database/structures/user.schema";
export declare class AuthService {
    private usersService;
    private jwtSecrets;
    constructor(usersService: UsersService, jwtSecrets: JwtService);
    validateUser(login: string, password: string): Promise<any>;
    login(user: User): Promise<{
        access_token: string;
    }>;
}
