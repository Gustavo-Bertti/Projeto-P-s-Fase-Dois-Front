import { cookies } from "next/headers"


const getToken = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get('TOKEN_COOKIE')?.value;
    return token;
}

export default getToken;