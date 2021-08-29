import { Model } from "mongoose";
import { UpdateResult } from "mongodb";
import { UserDTO } from "../dto/user.dto";
import OptionsDTO from "../dto/options.dto";
import { User, UserDocument } from "../database/structures/user.schema";
export declare class AuthService {
    private readonly model;
    constructor(model: Model<UserDocument>);
    findAll(): Promise<Array<User>>;
    findOne(login: string): Promise<User>;
    create(user: UserDTO): Promise<UserDTO>;
    edit(login: string, options: OptionsDTO): Promise<UpdateResult>;
    delete(login: string): Promise<User>;
    checkPassword(user: UserDTO): Promise<Boolean>;
}
