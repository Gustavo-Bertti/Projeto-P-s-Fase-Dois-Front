import Token from "@/types/Token";
import { cookies } from "next/headers"


const getToken = async () => {
    const cookieStore = await cookies();
    const tokenString = cookieStore.get('TOKEN_COOKIE')?.value;

    if (!tokenString) {
        return null;
    }

    try {
        const token: Token = JSON.parse(tokenString);
        return token;
    } catch (error) {
        console.error('Erro ao parsear o token:', error);
        return null;
    }
}

export const clearToken = async () => {
    const cookieStore = await cookies();
    cookieStore.delete('TOKEN_COOKIE');
}

export default getToken;