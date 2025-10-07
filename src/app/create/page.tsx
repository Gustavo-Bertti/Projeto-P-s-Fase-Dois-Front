import CreatePostPage from "./_component/createPage";
import AuthRole from "../authRole/authRole";


const Page = () => {
    return (
        <AuthRole>
            <CreatePostPage/>
        </AuthRole>
    );
};

export default Page;