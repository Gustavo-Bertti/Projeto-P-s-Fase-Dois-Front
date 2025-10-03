import { paths } from "@/config/path";
import getToken from "@/utils/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";




type AuthGuardProps = {
    children: React.ReactNode;
    allowWithoutAuth?: boolean;
};

const AuthGuard = async ({ children, allowWithoutAuth = false }: AuthGuardProps) => {


    const token = await getToken();
    const currentPath = (await headers()).get("x-invoke-pathname") || "";

    console.log("AuthGuard currentPath:", currentPath);
    if (!token && !allowWithoutAuth && currentPath !== paths.auth.login.getHref()) {
        redirect(paths.auth.login.getHref());
    }

    return <>{children}</>;
}
export default AuthGuard;