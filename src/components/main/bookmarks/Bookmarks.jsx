import PropTypes from 'prop-types';
const Bookmarks = ({ data }) => {
    const readTime = data.reduce((prev, data) => prev + data.readTime, 0);
    return (
        <div>
            <div className="flex justify-center items-center rounded-lg bg-cusBlue/10 min-h-24 mb-6 border border-cusBlue">
                <h2 className="text-cusBlue text-xl md:text-lg lg:text-2xl font-bold">Spent time on read : {readTime} min</h2>
            </div>
            <div className="bg-cusBlack/5 min-h-10 rounded-lg p-3 lg:p-7 space-y-5 lg:space-y-7">
                <h2 className="text-xl md:text-lg lg:text-2xl font-bold">Bookmarked Blogs : {data.length}</h2>
                <div className="text-base lg:text-lg font-semibold px-4 md:px-2 xl:px-5 space-y-3">
                    {
                        data.map((data, idx) => <div className="bg-[#FFFFFF] rounded-lg p-5 md:p-2 lg:p-5 text-justify" key={idx}><p>{data.title}</p></div>)
                    }
                </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    data: PropTypes.array.isRequired
}
export default Bookmarks;