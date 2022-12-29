import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import { useState, useRef, useEffect } from "react";

import Image from "next/image";

import { db } from "../../utils/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import "react-h5-audio-player/lib/styles.css";

import { useRouter } from "next/router";

export const ProfilePageLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex justify-end">
      <Sidebar />
      <main className="w-10/12 xl:w-3/4 ">
        <Navbar currentContext={"Home"} />
        <div className="app-container w-full flex justify-center">
          <div className="w-full xl:w-2/3 flex flex-col items-center">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
const ProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  // const dispatch = useDispatch();
  // const getPosts = useCallback(async () => {
  //   await db
  //     .collection("posts")
  //     .get()
  //     .then((querySnapshot) => {
  //       // setPosts(querySnapshot.);
  //       // console.log(posts);
  //       querySnapshot.forEach((doc) => {
  //         // p.push(doc.data());
  //         p.unshift({ ...doc.data(), id: doc.id });
  //       });
  //       setPosts(p);
  //       dispatch(postActions.setPosts({ posts: p }));
  //     });
  // }, [p]);
  // useEffect(() => {
  //   getPosts();
  // }, [getPosts]);
  useEffect(() => {
    setLoadingUser(true);
    setUser(null);
    onSnapshot(query(collection(db, "users")), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.data().displayName === id) {
          setUser(doc.data());
        }
      });
    });
    setLoadingUser(false);
  }, [db, id]);
  return (
    <ProfilePageLayout>
      <div className="w-full h-full px-4">
        {!loadingUser && user !== null ? (
          <div className="w-full h-full">
            <div>
              <Image
                src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5357a8c992500f5fc84f40_peep-52.svg"
                width={60}
                height={60}
                className="w-40 h-40 rounded-full  object-contain"
                alt="Profile Picture"
              />
            </div>
            <div className="flex justify-between items-center">
              <span>
                <p className="font-bold text-lg">{user.displayName}</p>
                <p className="hover:opacity-60 transition-all duration-200 cursor-pointer">
                  @{user.username}
                </p>
              </span>
              <button>Challenge User</button>
            </div>
            <div className="flex justify-start space-x-4">
              <span className="font-bold">
                {user.wins} <span className="text-gray-300">Wins</span>
              </span>
              <span className="font-semibold">
                {user.losses} <span className="text-gray-300">Losses</span>
              </span>
            </div>
          </div>
        ) : (
          "Please wait while we get data from the db"
        )}
      </div>
    </ProfilePageLayout>
  );
};

export default ProfilePage;
