import AuthGuard from "../authGuard/authGuard";
import HomePage from "./_component/homePage";

const Page = () => {
    return (
        <AuthGuard>
            <HomePage />
        </AuthGuard>
    );
};

export default Page;