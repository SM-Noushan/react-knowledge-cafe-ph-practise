import Header from "./components/header/Header";
import Blogs from "./components/main/blogs/Blogs";
import Bookmarks from "./components/main/bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = (title, readTime) => {
    const updatedBookmark = [...bookmarks, { 'title': title, 'readTime': readTime }];
    // console.log(updatedBookmark);
    setBookmarks(updatedBookmark);
  }
  return (
    <div className="max-w-80 md:container xl:max-w-screen-xl mx-auto font-exo2 text-cusBlack">
      <Header></Header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-6 mt-6">
        <div className="md:col-span-2">
          <Blogs handleBookmark={handleBookmark}></Blogs>
        </div>
        <div>
          <Bookmarks data={bookmarks}></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App
