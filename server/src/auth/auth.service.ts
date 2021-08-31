import {Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {checkHashedString} from "../Util/Util";
import {User} from "../database/structures/user.schema";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(login: string, password: string): Promise<any>{
        const user: User = await this.usersService.findOne(login)
        const isValidPassport = await checkHashedString(password, user.password)

        if(user && isValidPassport){
            return user
        }

        return null
    }
}
