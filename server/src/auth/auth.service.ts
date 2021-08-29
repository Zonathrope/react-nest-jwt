import {Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {checkHashedString} from "../Util/Util";

@Injectable()
export class AuthService {
    constructor(private userService:UsersService) {}

    async validateUser(login: string, password: string): Promise<any>{
        const user = await this.userService.findOne(login)

        if(user && await checkHashedString(password, user.password)){
            const {password, ...rest} = user
            return rest
        }
        return null
    }
}
