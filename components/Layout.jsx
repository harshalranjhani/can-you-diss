import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Input from "./Input";
import { db } from "../utils/firebase";
import Posts from "./Posts";
import { useState, useCallback, useEffect } from "react";

import posts from "../data/posts.js";

const Layout = () => {
  const [posts, setPosts] = useState([]);
  let p = [];
  const getPosts = useCallback(async () => {
    await db
      .collection("posts")
      .get()
      .then((querySnapshot) => {
        // setPosts(querySnapshot.);
        // console.log(posts);
        querySnapshot.forEach((doc) => {
          // p.push(doc.data());
          p.unshift(doc.data());
        });
        setPosts(p);
      });
  }, [p]);
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <div className="h-screen w-screen flex justify-end">
      <Sidebar />
      <main className="w-10/12 xl:w-3/4 ">
        <Navbar currentContext={"Home"} />
        <div className="app-container w-full flex justify-center">
          <div className="w-full xl:w-2/3 flex flex-col items-center">
            <Input posts={posts} getPosts={getPosts} />
            <Posts posts={posts} />
            {/* Posts */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
