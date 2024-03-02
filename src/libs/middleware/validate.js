import validator from "validator"
import User, { characterLimits } from "@/models/users";
import { findUserByUserName } from "../services/userServices";
import { findUserByEmail } from "../services/userServices";
import HttpError from '@/helpers/HttpError'
export const registerValidation = async({formData})=>{
   
    for (const field in formData){
        if(characterLimits[field]){
            const {min,max} = characterLimits[field];

            if(!validator.isLength(formData[field],{min,max})){
                throw new HttpError(400,`${field.toLocaleLowerCase()} must be between ${min} and ${max} characters`);
        
            }
        }
    }
     const {email,userName} = formData;
    console.log(email,userName)
    const emailExists = await findUserByEmail({email});
    if(emailExists)throw new HttpError('400','This email is already registered');
    
    const userNameExists = await findUserByUserName({userName});

    if(userNameExists)throw new HttpError('400','This username has already been taken');
}