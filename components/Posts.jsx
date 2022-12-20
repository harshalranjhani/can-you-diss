import Post from "./Post";

import { useSelector } from "react-redux";
import { postActions } from "../store/post-slice";
import { useEffect, useState, useCallback } from "react";
import { db, auth } from "../utils/firebase";

import { user } from "../data/user";

const Posts = ({posts}) => {
  // const posts = useSelector((state) => state.post.posts);
  // console.table(posts);


  return (
    <div className="w-full">
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.createdByAuthor}
            profilePicture={user.profilePicture}
            description={post.description}
            postImage={post.postImage}
            audioFile={post.audioFile}
            dissedUserName={post.dissedUserName}
            likes={post.likes}
            dislikes={post.dislikes}
            comments={20}
          />
        );
      })}

      {!posts.length && <h1 className="text-white">No Posts Found.</h1>}
    </div>
  );
};

export default Posts;
