import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Blog from "./Blog";

function Blogs({ handleBookmark, handleReadTime }) {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div>
            <div className="space-y-16 lg:space-y-20">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleBookmark={handleBookmark}
                        handleReadTime={handleReadTime}>
                    </Blog>)
                }
            </div>
        </div>
    );
}
Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
    handleReadTime: PropTypes.func.isRequired
}
export default Blogs;