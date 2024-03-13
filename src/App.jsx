import Header from "./components/header/Header";
import Blogs from "./components/main/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";

function App() {
  return (
    <div className="container max-w-screen-xl mx-auto font-exo2 text-cusBlack">
      <Header></Header>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
        <div className="md:col-span-2">
          <Blogs></Blogs>
        </div>
        <div>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App
