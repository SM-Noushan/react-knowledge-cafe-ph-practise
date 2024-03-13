import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';


const Blog = ({ blog }) => {
    const { title,
        cover,
        author,
        author_img,
        posted_date,
        reading_time,
        hashtags } = blog;
    const bookmarkIcon = <FontAwesomeIcon className="fa-xl" icon={faBookmark} />;
    const flexStyle = "flex justify-between items-center";
    return (
        <div className="card space-y-4">
            <figure>
                <img className="rounded-lg w-full" src={cover} alt="cover-img" />
            </figure>
            <div className="card-body p-0">
                <div className={`${flexStyle}`}>
                    <div className={`${flexStyle} gap-4`}>
                        <img className="size-16" src={author_img} alt="author-img" />
                        <div className="flex flex-col justify-center">
                            <h3 className="text-2xl font-bold">{author}</h3>
                            <h4 className="font-semibold opacity-60">{posted_date}</h4>
                        </div>
                    </div>
                    <div className={`${flexStyle} gap-2 text-xl font-medium opacity-60`}>
                        <h3>{reading_time} Min ago</h3>
                        <button className="btn btn-ghost">{bookmarkIcon}</button>
                    </div>
                </div>
                <h2 className="text-[40px] font-bold">{title}</h2>
                <span className="opacity-60 text-xl font-medium my-2">{hashtags.map(tagName => '#' + tagName + ' ')}</span>
                <a className="w-fit hover:cursor-pointer underline text-cusBlue text-xl font-medium">Mark as read</a>
            </div>
        </div >
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog; 