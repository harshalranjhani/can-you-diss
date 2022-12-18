import Post from "./Post";

import { useSelector } from "react-redux";
import { postActions } from "../store/post-slice";

const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
  console.table(posts);
  return (
    <div className="w-full">
      {posts.map((post) => {
        console.table(post);
        return <Post key={post.id} {...post} />;
      })}
    </div>
  );
};

export default Posts;
