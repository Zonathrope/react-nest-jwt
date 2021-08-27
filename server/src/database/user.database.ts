import * as mongoose from "mongoose";
import User from "./structures/user.schema";
import {Model} from "mongoose";
import {UserDTO} from "../dto/user.dto";
import {hashString} from "../Util/Util";

export default class UserDatabase {
    private userSchema: Model<any>;
    constructor(link) {
        mongoose.connect(link)
            .then(()=> console.log("connected to database"))
            .catch(e => console.error(e))
        this.userSchema = User
    }

    async createUser(user: UserDTO){
        const hashedPassword: String = await hashString(user.password)
        user = {...user, password: hashedPassword}
        await this.userSchema.create(user)
        return user
    }
}