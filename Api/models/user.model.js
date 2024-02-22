import { timeStamp } from "console";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
         type: String,
         required: true,
         unique:true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePhoto:{
        type: String,
        default:'https://cdn.iconscout.com/icon/free/png-256/free-avatar-372-456324.png'
    },
}, {timestamps:true});

const User = mongoose.model('User', UserSchema);

export default User;
