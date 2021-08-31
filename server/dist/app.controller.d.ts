import { AppService } from './app.service';
import { UserDto } from "./dto/user.dto";
import { UsersService } from "./users/users.service";
export declare class AppController {
    private readonly appService;
    private readonly usersService;
    constructor(appService: AppService, usersService: UsersService);
    login(req: any): Promise<any>;
    getHello(req: any): string;
    registration(body: UserDto): Promise<any>;
    getUser(login: string): Promise<import("./database/structures/user.schema").User>;
}
