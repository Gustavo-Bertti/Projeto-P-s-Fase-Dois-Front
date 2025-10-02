import { env } from "@/config/env";
import { Postagem } from "@/types/Postagem";
import axios from "axios";

const baseUrl = env.NEXT_PUBLIC_API_URL;
const client = axios;
client.defaults.baseURL = baseUrl;

export const getAllPosts = async () => {
    try {
        const res = await client.get<Postagem[]>('/postagem');
        return res.data;
    } catch (error) {
        throw error;
    }
}