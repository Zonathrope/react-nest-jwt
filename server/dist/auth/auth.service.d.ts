import { UsersService } from "../users/users.service";
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    validateUser(login: string, password: string): Promise<any>;
}
