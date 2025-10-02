'use client';
import { paths } from "@/config/path";
import axios from "axios";
import Link from "next/link";


const Header = () => {

    const logout = async () => {
        try {
            await axios.get('/api/logout');
            window.location.href = paths.auth.login.getHref();
        } catch (error) {
            console.error('Erro ao sair:', error);
        }
    };

    return (
        <header className="w-full bg-indigo-700 text-white py-4 px-30 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Blog Escolar</h1>
            <nav className="mt-2 md:mt-0 flex gap-4">
                <Link href={paths.home.getHref()} className="mr-4 hover:underline">
                    Home
                </Link>
                <Link href={paths.manager.getHref()} className="hover:underline">
                    Gerenciar
                </Link>
                <button onClick={logout} className="ml-4 hover:underline cursor-pointer">
                    Sair
                </button>
            </nav>
        </header>
    );
}
export default Header;