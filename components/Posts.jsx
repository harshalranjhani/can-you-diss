import Post from "./Post";

import { useSelector } from "react-redux";
import { postActions } from "../store/post-slice";
import { useEffect, useState } from "react";
import { db, auth } from "../utils/firebase";

const Posts = () => {
  const [firebasePosts, setFirebasePosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .doc(auth.currentUser?.uid)
      .collection("posts")
      .orderBy("timestamp")
      .onSnapshot((snapshot) =>
        setFirebasePosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );

    console.log(firebasePosts);

    return unsubscribe;
  }, [firebasePosts]);

  const posts = useSelector((state) => state.post);
  console.table(posts);
  return (
    <div className="w-full">
      {firebasePosts.map(({ id, data }) => {
        return (
          <Post
            key={id}
            id={id}
            username="isuf"
            profilePicture={data.profileImage}
            description={data.description}
            postImage={data.postImage}
            audioFile={data.audioFile}
            dissedUserName="skjfb"
            likes={data.likes}
            dislikes={data.dislikes}
            comments={20}
          />
        );
        {
          console.log(posts);
        }
      })}
    </div>
  );
};

export default Posts;
