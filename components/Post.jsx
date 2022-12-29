import TagUser from "./TagUser";

import Image from "next/image";
import Link from "next/link";

import { postIcons } from "./../assets/Icons.js";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../store/post-slice";

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
  const dispatch = useDispatch();
  const state = useSelector((state) => state.post);
  return (
    <div className="pt-6 flex border-x-2 border-b-2 border-border-gray">
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
          <span className="font-semibold">{username}</span>
        </div>
        <div>
          <p>{description}</p>
          <p>
            <TagUser username={username} /> has challenged{" "}
            <TagUser username={dissedUserName} /> to a rap battle
          </p>
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
              width={50}
              height={50}
              src={postImage}
              onLoadingComplete={(e) => console.log(e)}
              alt="Post Image"
              className="h-auto rounded-3xl max-h-80 w-full object-contain"
            />
          </div>
        ) : (
          ""
        )}
        <div className="flex items-center justify-around h-20">
          <span
            className="post-actions hover:bg-onhover-green hover:text-twit-green transition-all duration-300"
            onClick={() => {
              console.log("like button pressed");
              console.log(id);
              dispatch(postActions.likePost({ postDocId: id }));
            }}
          >
            <postIcons.like height={20} className="" />
            <span>{likes}</span>
          </span>
          <span
            className="post-actions hover:bg-onhover-red hover:text-twit-red transition-all duration-300"
            onClick={() => {
              console.log("dislike button pressed");
              dispatch(postActions.dislikePost({ postDocId: id }));
            }}
          >
            <postIcons.dislike height={20} />
            <span>{dislikes}</span>
          </span>
          <span className="post-actions hover:bg-onhover-blue hover:text-twit-blue transition-all duration-300">
            <postIcons.comments height={20} />
            <span>{comments.count}</span>
          </span>
          <span
            className="post-actions hover:bg-onhover-blue hover:text-twit-blue transition-all duration-300"
            onClick={() => {
              console.log("delte button pressed");
              dispatch(postActions.deletePost({ id }));
            }}
          >
            <postIcons.trash height={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
