'use client';
import { AuthContext } from "@/app/context/AuthContext";
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from "react";

const Page = () => {
    const context = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (context && !context.auth.isAuthenticated) {
            router.push('/login')
        }
    }, [context, router]);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Bem-vindo à Página Inicial</h1>

        </div>
    );
};

export default Page;