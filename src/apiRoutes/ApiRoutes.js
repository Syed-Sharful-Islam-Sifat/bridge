import axios from "axios"

const API = axios.create({baseURL:server});

export const authApi = {
    register: (data)=>API.post('api/p/register',data),
    login: (data)=>API.post('api/p/login',data)  
}