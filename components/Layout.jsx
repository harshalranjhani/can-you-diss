import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Input from "./Input";

import Posts from "./Posts";

import posts from "../data/posts";

const Layout = () => {
  return (
    <div className="h-screen w-screen flex justify-end">
      <Sidebar />
      <main className="w-10/12 xl:w-3/4 ">
        <Navbar />
        <div className="app-container w-full flex justify-center">
          <div className="w-full xl:w-2/3 flex flex-col items-center">
            <Input />
            <Posts />
            {/* Posts */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
