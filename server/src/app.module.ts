import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './auth/auth.module';
import {MongooseModule} from "@nestjs/mongoose";
import {UsersModule} from './users/users.module';
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [AuthModule, MongooseModule.forRoot('mongodb+srv://qwerty:12345@maincluster.sg7ka.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
