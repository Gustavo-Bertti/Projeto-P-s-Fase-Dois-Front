import { env } from "@/config/env";
import { Postagem } from "@/types/Postagem";
import getToken from "@/utils/auth";
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
export const createPost = async (post: Postagem) => {
    try {
        const res = await client.post<Postagem>('/postagem', post);
        return res.data;
    } catch (error) {
        throw error;
    }
}
export const updatePost = async (post: Postagem) => {
    try {
        const res = await client.put<Postagem>(`/postagem/${post.id}`, post);
        return res.data;
    } catch (error) {
        throw error;
    }
}
export const deletePost = async (id: number) => {
    try {
        await client.delete(`/postagem/${id}`);
        return true;
    } catch (error) {
        throw error;
    }   
}
export const getPostById = async (id: number) => {
    try {
        const res = await client.get<Postagem>(`/postagem/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
}
export const getPostsByUserId = async () => {
    try {
        const token = await getToken()
        if (token != null) {
        const res = await client.get<Postagem[]>(`/postagem/usuario/${token.idUsuario}`);
        return res.data;
}
    } catch (error) {
        throw error;
    }
}
