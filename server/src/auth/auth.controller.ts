import {Body, Controller, Get, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {UserDTO} from "../dto/user.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    async index(){
        return await this.authService.findAll()
    }

    @Post('/registration')
    createUser(@Body() body: UserDTO){
        console.log(body)
        return this.authService.create(body)
    }

    @Post('/login')
    loginUser(@Body() body: UserDTO){
        return this.authService.checkPassword(body)
    }

}
