import {Controller, Post, UseGuards, Request, Body} from '@nestjs/common';
import {AppService} from './app.service';
import {LocalAuthGuard} from "./auth/local-auth.guard";
import {UserDto} from "./dto/user.dto";
import {UsersService} from "./users/users.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService,
                private readonly usersService: UsersService) {
    }


    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Request() req): any {
        return req.user;
    }

    @Post('/registration')
    async registration(@Body() body: UserDto): Promise<any> {
        await this.usersService.create(body)
        return this.usersService.findOne(body.login)
    }
}
