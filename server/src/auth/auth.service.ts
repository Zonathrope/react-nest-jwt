import {Injectable} from '@nestjs/common';
import { JwtService} from "@nestjs/jwt";
import {UsersService} from "../users/users.service";
import {checkHashedString} from "../Util/Util";
import {User} from "../database/structures/user.schema";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtSecrets: JwtService) {}

    async validateUser(login: string, password: string): Promise<any>{
        const user: User = await this.usersService.findOne(login)

        if(user && await checkHashedString(password, user.password)){
            return user
        }

        return null
    }

    async login(user: User){
        const payload = {login: user.login, sub: user.password} // TODO: change sub to appropriate

        return {
            access_token: this.jwtSecrets.sign(payload),
        }
    }
}

