import {Injectable} from '@nestjs/common';

@Injectable()
export class AuthService {

    hello(){
        return {id: 0}
    }

    createUser(login) {
        return {id: Date.now(), login}
    }
}
