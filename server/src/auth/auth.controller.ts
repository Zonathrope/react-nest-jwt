import {Controller, Get, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    getHello(){
        return this.authService.hello()
    }

    @Post('/registration')
    createUser(){

    }

    @Post('login')
    loginUser(){

    }

}
