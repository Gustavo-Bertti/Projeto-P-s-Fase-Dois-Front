import { Postagem } from "@/types/Postagem";

export const paths = {
    home: {
        getHref: () => '/',
    },
    manager: {
        getHref: () => '/manager',
    },
    details: {
        getHref: (element: Postagem) => `/detailsPost?element=${encodeURIComponent(JSON.stringify(element))}`,
    },
    auth: {
        login: {
            getHref: () => '/auth/login',
        },
        registerUser: {
            getHref: () => '/auth/registerUser',
        }
    }
}