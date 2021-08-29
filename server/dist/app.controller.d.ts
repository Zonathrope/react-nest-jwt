import { AppService } from './app.service';
import { UserDto } from "./dto/user.dto";
import { UsersService } from "./users/users.service";
export declare class AppController {
    private readonly appService;
    private readonly usersService;
    constructor(appService: AppService, usersService: UsersService);
    login(req: any): any;
    registration(body: UserDto): Promise<any>;
}
