export const paths = {
    home: {
        getHref: () => '/',
    },
    manager: {
        getHref: () => '/manager',
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