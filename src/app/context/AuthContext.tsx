'use client';
import { createContext, useState } from "react";
import Auth from "../types/Auth";

type AuthContextType = {
    auth: Auth;
    setAuth: React.Dispatch<React.SetStateAction<Auth>>;
};
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [auth, setAuth] = useState<Auth>({ isAuthenticated: false });

    return <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
    </AuthContext.Provider>;
}