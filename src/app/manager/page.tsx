import AuthRole from "../authRole/authRole";
import ManagerPage from "./_component/managerPage";

const Page = () => {
    return (
        <AuthRole>
            <ManagerPage />
        </AuthRole>
    );
}
export default Page;