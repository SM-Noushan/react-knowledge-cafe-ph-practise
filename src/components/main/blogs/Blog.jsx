import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';


const Blog = ({ blog, handleBookmark }) => {
    const { title,
        cover,
        author,
        author_img,
        posted_date,
        reading_time,
        hashtags } = blog;
    const flexStyle = "flex justify-between items-center";
    const [bookmarkState, setBookmarkState] = useState(false);
    const [bookmarkNotification, setBookmarkNotification] = useState(false);
    const bookmarkIcon = <FontAwesomeIcon className={`fa-xl ${bookmarkNotification ? 'fa-shake' : ''}`} icon={faBookmark} />;
    const handleOnclick = () => {
        setBookmarkNotification(true);
        setTimeout(() => {
            setBookmarkState(true);
            setBookmarkNotification(false);
        }, 1200);
        handleBookmark(title, parseInt(reading_time));
    };
    return (
        <div className="card space-y-4">
            <figure>
                <img className="rounded-lg w-full" src={cover} alt="cover-img" />
            </figure>
            <div className="card-body p-0">
                <div className={`${flexStyle}`}>
                    <div className={`${flexStyle} gap-2 md:gap-4`}>
                        <img className="size-10 md:size-16" src={author_img} alt="author-img" />
                        <div className="flex flex-col justify-center">
                            <h3 className="md:text-2xl font-bold">{author}</h3>
                            <h4 className="text-xs md:text-base font-semibold opacity-60">{posted_date}</h4>
                        </div>
                    </div>
                    <div className={`${flexStyle} md:gap-2 text-base md:text-xl font-medium opacity-60`}>
                        <h3>{reading_time} Min ago</h3>
                        <button onClick={() => handleOnclick()} className={`btn btn-ghost btn-sm md:btn-md ${bookmarkState ? '' : 'hover:scale-125'}`} disabled={(bookmarkState || bookmarkNotification) ? true : false}>{bookmarkIcon}</button>
                    </div>
                </div>
                <h2 className="text-xl lg:text-[40px] font-bold">{title}</h2>
                <div className="flex items-center justify-between">
                    <span className="opacity-60 text-sm md:text-xl font-medium">{hashtags.map(tagName => '#' + tagName + ' ')}</span>
                    <button className="w-fit hover:cursor-pointer hover:font-semibold underline text-cusBlue text-sm md:text-xl font-medium">Mark as read</button>
                </div>
            </div>
        </div >
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired
}
export default Blog; 