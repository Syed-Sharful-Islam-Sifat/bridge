import reqresMiddleware from "@/libs/middleware/reqresMiddleware"
import { registerValidation } from "@/libs/middleware/validate";
import { createUser } from "@/libs/services/userServices";
import HttpError from "@/helpers/HttpError";
const handler = async (req,res)=>{
    switch(req.method){
        case "POST":
           const {firstName,lastName,userName,email,password} = req.body;
           
          const formData = {
            firstName,
            lastName,
            userName,
            email,
            password
           }
            await registerValidation({formData})
            const data =  await createUser({formData:formData});
            res.message = "User registered successfully"
            return data;

         default:
           throw new HttpError(405,"Method Not allowed");   
    }
}

export default reqresMiddleware(handler)