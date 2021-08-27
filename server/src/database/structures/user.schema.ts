import {Mongoose} from 'mongoose'
import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    login: {
        type:String,
        required:true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
})

export default mongoose.model('User', UserSchema)

