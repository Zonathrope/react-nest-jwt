import * as mongoose from "mongoose";
import User from "./structures/user.schema";
import {Model} from "mongoose";
import {UserDTO} from "../dto/user.dto";
import OptionsDTO from "../dto/options.dto";

export default class UserDatabase {
    private userSchema: Model<any>;
    constructor(link) {
        mongoose.connect(link)
            .then(()=> console.log("connected to database"))
            .catch(e => console.error(e))
        this.userSchema = User
    }

    async createUser(user: UserDTO){
        try{
            await this.userSchema.create(user)
            return user
        }
        catch (e) {
            console.error(e)
        }
    }

    async getUser(user: UserDTO){
        try{
            return this.userSchema.findOne({login: user.login})
        }
        catch (e) {
            console.error(e)
        }
    }

    async updateUser(user: UserDTO, options:OptionsDTO){
        try{
            await this.userSchema.updateOne({login: user.login}, {...options})
            return true
        }
        catch (e) {
            console.error(e)
        }
    }

    async deleteUser(user: UserDTO){
        try{
            await this.userSchema.deleteOne({login: user.login})
            return true
        }
        catch (e) {
            console.error(e)
        }
    }
}