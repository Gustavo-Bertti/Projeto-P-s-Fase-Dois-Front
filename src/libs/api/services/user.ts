import { env } from "@/config/env";
import CreateUserDto from "@/types/CreateUserDto";
import LoginDto from "@/types/LoginDto";
import axios from "axios";
import { cookies } from "next/headers";



const baseUrl = env.NEXT_PUBLIC_API_URL;
const client = axios;
client.defaults.baseURL = baseUrl;

export const createUser = async (data: CreateUserDto) => {
    await client.post("/usuario", data);
}

export const login = async (data: LoginDto) => {
    try {
        const Cookies = await cookies();
        const res = await client.post('/login', data);
        Cookies.set('TOKEN_COOKIE', JSON.stringify(res.data.token));
    } catch (error) {
        throw error;
    }
};
