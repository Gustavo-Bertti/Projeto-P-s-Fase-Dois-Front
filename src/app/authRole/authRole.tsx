import { paths } from "@/config/path";
import getToken from "@/utils/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";




type AuthRoleProps = {
    children: React.ReactNode;
    allowWithoutAuth?: boolean;
};

const AuthRole = async ({ children, allowWithoutAuth = false }: AuthRoleProps) => {


    const token = await getToken();
    const currentPath = (await headers()).get("x-invoke-pathname") || "";

    console.log("AuthRole currentPath:", currentPath);
    if (token?.idTipo !== 2 && !allowWithoutAuth && currentPath !== paths.manager.getHref()) {
        console.log("role");
        redirect(paths.home.getHref());
    }

    return <>{children}</>;
}
export default AuthRole;