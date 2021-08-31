import { AppService } from './app.service';
import { UserDto } from "./dto/user.dto";
import { UsersService } from "./users/users.service";
import { AuthService } from "./auth/auth.service";
export declare class AppController {
    private readonly appService;
    private readonly usersService;
    private readonly authService;
    constructor(appService: AppService, usersService: UsersService, authService: AuthService);
    login(req: any): Promise<any>;
    getHello(req: any): string;
    registration(body: UserDto): Promise<any>;
    getUser(login: string): Promise<import("./database/structures/user.schema").User>;
}
