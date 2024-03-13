import { useEffect, useState } from "react";
import Blog from "./Blog";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('public/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div>
            <div className="space-y-24">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}>
                    </Blog>)
                }
            </div>
        </div>
    );
}
export default Blogs;