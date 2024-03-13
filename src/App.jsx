import Header from "./components/header/Header";
import Blogs from "./components/main/blogs/Blogs";
import Bookmarks from "./components/main/bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState([]);
  const handleBookmark = title => {
    const updatedBookmark = [...bookmarks, title];
    setBookmarks(updatedBookmark);
  };
  const handleReadTime = time => {
    const updatedReadTime = [...readTime, time];
    setReadTime(updatedReadTime);
  };
  return (
    <div className="max-w-80 md:container xl:max-w-screen-xl mx-auto font-exo2 text-cusBlack">
      <Header></Header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-6 mt-6">
        <div className="md:col-span-2">
          <Blogs handleBookmark={handleBookmark} handleReadTime={handleReadTime}></Blogs>
        </div>
        <div>
          <Bookmarks data={bookmarks} readTime={readTime}></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App
