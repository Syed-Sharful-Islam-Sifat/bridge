import User from "@/models/users"
const authRepository = {
    create: async ({formData})=>{
        console.log('authrepo',formData)
      const user = await User.create({
        ...formData
      })
      return user;
    }
}

export default authRepository