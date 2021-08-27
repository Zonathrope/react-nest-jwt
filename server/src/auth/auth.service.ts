import {Injectable} from '@nestjs/common';
import UserDatabase from "../database/user.database";
import {UserDTO} from "../dto/user.dto";
import OptionsDTO from "../dto/options.dto";
import {checkHashedString, hashString} from "../Util/Util";

@Injectable()
export class AuthService {
    constructor(private readonly userDatabase: UserDatabase) {}

    async addUser(user: UserDTO): Promise<UserDTO>{
        const hashedUser = { ...user, password: await hashString(user.password)}
        await this.userDatabase.createUser({...hashedUser})
        return hashedUser
    }

    async checkPassword(user: UserDTO): Promise<Boolean>{
        const {password} = await this.userDatabase.getUser(user)
        return !!(await checkHashedString(user.password, password));
    }

    async editUser(user: UserDTO, options: OptionsDTO): Promise<void>{
        await this.userDatabase.updateUser(user, options)
    }

    async removeUser(user: UserDTO):Promise<void>{
        await this.userDatabase.deleteUser(user)
    }
}
