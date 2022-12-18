import Post from "./Post";
import posts from "../data/posts";
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

  return (
    <div>
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
      })}
    </div>
  );
};

export default Posts;
