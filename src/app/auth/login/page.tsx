import AuthGuard from "@/app/authGuard/authGuard";
import LoginPage from "./_component/loginPage";





const Page = () => {

    return (
        <AuthGuard allowWithoutAuth={true}>
            <LoginPage />
        </AuthGuard>
    );
}
export default Page;