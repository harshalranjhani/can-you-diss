import Image from "next/image";
import Profile from "./Profile";

const Post = ({
  id,
  username,
  profilePicture,
  description,
  postImage,
  audioFile,
}) => {
  return (
    <div>
      <div>
        <Profile />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Post;
