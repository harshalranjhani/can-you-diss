import Image from "next/image";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Post = ({
  id,
  username,
  profilePicture,
  description,
  postImage,
  audioFile,
  dissedUserName,
  likes,
  dislikes,
  comments,
}) => {
  return (
    <div className="w-full flex border-2 border-border-gray">
      <div>
        <Image
          src={profilePicture}
          width={20}
          height={20}
          alt="User's Profile Picture"
          className="h-14 w-16 rounded-full mr-2 hover:opacity-60 transition-opacity"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <span>{username}</span>
        </div>
        <div>
          <p>{description}</p>
        </div>
        {audioFile ? <div>Audio File:</div> : null}
        {audioFile ? (
          <div>
            <AudioPlayer
              src={audioFile}
              style={{ backgroundColor: "black" }}
              onPlay={(e) => console.log("onPlay")}
              showJumpControls={false}
              onPlayError={(err) => {
                alert(err + "behen ke lun audio file upload kar");
              }}
            />
          </div>
        ) : null}
        {postImage ? (
          <div>
            <Image
              width={40}
              height={40}
              src={postImage}
              alt="Post Image"
              className="rounded-3xl max-h-80 w-full object-contain"
            />
          </div>
        ) : (
          ""
        )}
        <div>
          <span>Likes : {likes}</span>
          <span>Dislikes : {dislikes}</span>
          <span>Comments : {comments}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
