import { Appbar } from "../components/Appbar";
import { Blogsk } from "../components/Blogskeleton";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({ id: id || "" });

    if (loading) {
        return <div>
                    <Appbar />
                        <div>
                    <Blogsk />
                    <Blogsk />
                    <Blogsk />
                    <Blogsk />
                    <Blogsk />
                    <Blogsk />
                </div>;
        </div> 
       
    }

    if (!blog) {
        return <div>Blog not found</div>;
    }
    
    return (
        <div>
            <FullBlog blog={blog} />
        </div>
    );
};
