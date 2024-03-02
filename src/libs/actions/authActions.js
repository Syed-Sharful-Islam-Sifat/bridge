import { authApi } from "@/apiRoutes/ApiRoutes";

export const auth = {
    REGISTER_USER: (data)=>authApi.register(data)
}