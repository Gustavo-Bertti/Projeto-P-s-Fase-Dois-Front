import AuthGuard from "@/app/AuthGuard/authGuard";
import RegisterUser from "./_component/registerUser";

const Page = () => {
    return (
        <AuthGuard allowWithoutAuth={true}>
            <RegisterUser />
        </AuthGuard>
    );
};

export default Page;
