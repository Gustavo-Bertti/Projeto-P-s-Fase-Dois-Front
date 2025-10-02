import { paths } from "@/config/path";
import Link from "next/link";


const Header = () => {

    return (
        <header className="w-full bg-indigo-700 text-white py-4 px-30 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Blog Escolar</h1>
            <nav className="mt-2 md:mt-0 flex gap-4">
                <Link href={paths.home.getHref()} className="mr-4 hover:underline">
                    Home
                </Link>
                <Link href="/about" className="hover:underline">
                    Gerenciar
                </Link>
            </nav>
        </header>
    );
}
export default Header;