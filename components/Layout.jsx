import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Input from "./Input";
import { auth, db } from "../utils/firebase";
import Posts from "./Posts";
import { useState, useCallback, useEffect } from "react";

import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { postActions } from "../store/post-slice";

const Layout = () => {
  const router = useRouter();
  useEffect(() => {
    const checkUser = () => {
      if (auth.currentUser === null) {
        router.replace("/login");
      }
    };
    checkUser();
  }, []);

  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  let p = [];
  const getPosts = useCallback(async () => {
    await db
      .collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          p.unshift({ ...doc.data(), id: doc.id });
        });
        setPosts(p);
        dispatch(postActions.setPosts({ posts: p }));
      });
  }, [p]);
  useEffect(() => {
    if (auth.currentUser !== null) {
      getPosts();
    }
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
