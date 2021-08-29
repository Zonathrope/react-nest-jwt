import {InjectModel} from "@nestjs/mongoose";
import {Injectable} from '@nestjs/common';
import {Model} from "mongoose";
import {UpdateResult} from "mongodb";
import {UserDTO} from "../dto/user.dto";
import OptionsDTO from "../dto/options.dto";
import {checkHashedString, hashString} from "../Util/Util";
import {User, UserDocument} from "../database/structures/user.schema";

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private readonly model: Model<UserDocument>) {}

    async findAll(): Promise<Array<User>>{
        return await this.model.find().exec()
    }

    async findOne(login: string): Promise<User>{
        return await this.model.findById(login).exec()
    }

    async create(user: UserDTO): Promise<UserDTO>{
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

    async checkPassword(user: UserDTO): Promise<Boolean>{
        const {password} = await this.model.findOne({login: user.login})
        return !!(await checkHashedString(user.password, password));
    }
}
