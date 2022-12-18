import Post from "./Post";

import { useSelector } from "react-redux";
import { postActions } from "../store/post-slice";

const Posts = () => {
  const posts = useSelector((state) => state.post);
  console.table(posts);
  return (
    <div className="w-full">
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
        {
          console.log(posts);
        }
      })}
    </div>
  );
};

export default Posts;
