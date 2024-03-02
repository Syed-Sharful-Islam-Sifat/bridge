import mongoose from "mongoose";
export const characterLimits = {
    firstName:{
        min:3,
        max:20
    },
    lastName:{
        min:3,
        max:20
    },
    userName:{
        min:3,
        max:15
    },
    password:{
        min:8,
        max:128
    }
}
const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        minLength:characterLimits.firstName.min,
        maxLength:characterLimits.firstName.max,
        required:true,
    },
    lastName: {
        type:String,
        minLength:characterLimits.lastName.min,
        maxLength:characterLimits.lastName.max,
        required:true
    },
    userName: {
        type:String,
        unique:String,
        minLength:characterLimits.userName.min,
        maxLength:characterLimits.userName.max,
        required:true
    },
    email:{
        type:String,
        unique:String,
        required:true
    },
    password: {
        type:String,
        minLength:characterLimits.password.min,
        maxLength: characterLimits.password.max,
        required:true
    }
})

const User = mongoose.models.User || mongoose.model('User',userSchema);
export default User;