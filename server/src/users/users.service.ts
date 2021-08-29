import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../database/structures/user.schema";
import {Model} from "mongoose";
import {UserDto} from "../dto/user.dto";
import {checkHashedString, hashString} from "../Util/Util";
import OptionsDTO from "../dto/options.dto";
import {UpdateResult} from "mongodb";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly model: Model<UserDocument>) {}

    async findAll(): Promise<Array<User> | undefined>{
        return await this.model.find().exec()
    }

    async findOne(login: string): Promise<User | undefined>{
        return await this.model.findOne({login: login}).exec()
    }

    async create(user: UserDto): Promise<UserDto>{
        return await new this.model({
            ...user,
            password: await hashString(user.password)
        }).save()
    }

    async edit(login: string, options: OptionsDTO): Promise<UpdateResult>{
        return await this.model.updateOne({login},{...options}).exec()
    }

    async delete(login: string): Promise<User> {
        return await this.model.findByIdAndDelete(login).exec();
    }

    async checkPassword(user: UserDto): Promise<Boolean>{
        const {password} = await this.model.findOne({login: user.login})
        return !!(await checkHashedString(user.password, password));
    }
}
