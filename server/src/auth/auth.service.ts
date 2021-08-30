import {Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {checkHashedString} from "../Util/Util";
import {User} from "../database/structures/user.schema";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(login: string, password: string): Promise<any>{
        const user: User = await this.usersService.findOne(login)

        if(user && await checkHashedString(password, user.password)){
            return user
        }

        return null
    }
}
