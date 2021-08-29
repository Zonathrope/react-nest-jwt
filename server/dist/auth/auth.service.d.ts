import { UsersService } from "../users/users.service";
export declare class AuthService {
    private userService;
    constructor(userService: UsersService);
    validateUser(login: string, password: string): Promise<any>;
}
