import {Controller, Post, UseGuards, Request, Body, Get, Param} from '@nestjs/common';
import {AppService} from './app.service';
import {LocalAuthGuard} from "./auth/local-auth.guard";
import {UserDto} from "./dto/user.dto";
import {UsersService} from "./users/users.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService,
                private readonly usersService: UsersService) {}


    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req): Promise<any> {
        return await req.user;
    }

    @Post('/registration')
    async registration(@Body() body: UserDto): Promise<any> {
        await this.usersService.create(body)
        return this.usersService.findOne(body.login)
    }

    @Get('/user/:login')
    async getUser(@Param('login') login: string){
        return await this.usersService.findOne(login)
    }
}
