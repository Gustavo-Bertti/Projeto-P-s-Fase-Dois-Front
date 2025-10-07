import EditPostPage from "./_component/editPage";
import AuthRole from "../authRole/authRole";


const Page = () => {
    return (
        <AuthRole>
            <EditPostPage/>
        </AuthRole>
    );
};

export default Page;