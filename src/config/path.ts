import { Postagem } from "@/types/Postagem";

export const paths = {
  home: {
    getHref: () => '/',
  },
  manager: {
    getHref: () => '/manager',
  },
  details: {
    getHref: (element: Postagem) =>
      `/detailsPost?element=${encodeURIComponent(JSON.stringify(element))}`,
  },
  update: {
    getHref: (element: Postagem) =>
      `/update?element=${encodeURIComponent(JSON.stringify(element))}`,
  },
  create: {
    getHref: () => '/create',
  },
  auth: {
    login: {
      getHref: () => '/auth/login',
    },
    registerUser: {
      getHref: () => '/auth/registerUser',
    },
  },
};
