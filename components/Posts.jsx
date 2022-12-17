import Post from "./Post";
import posts from "../data/posts";

const Posts = () => {
  return (
    <div>
      {posts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </div>
  );
};

export default Posts;
