import { createSlice } from "@reduxjs/toolkit";

import { audio } from "../data/audio.js";
import { db } from "../utils/firebase.js";
import firebase from "firebase/compat/app";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts(state, action) {
      const newState = action.payload;
      return newState;
    },
    async likePost(state, action) {
      const increment = firebase.firestore.FieldValue.increment(1);
      try {
        await db
          .collection("posts")
          .doc(action.payload.postDocId)
          .update({ likes: increment });

        console.log("post liked!");
      } catch (e) {
        console.log(e);
      }
    },
    async dislikePost(state, action) {
      const increment = firebase.firestore.FieldValue.increment(1);
      try {
        await db
          .collection("posts")
          .doc(action.payload.postDocId)
          .update({ dislikes: increment });

        console.log("post disliked!");
      } catch (e) {
        console.log(e);
      }
    },
    async deletePost(state, action) {
      // const newState = state.posts.filter((item) => {
      //   if (item.id == action.payload.id) {
      //     return item;
      //   }
      // });
      await db
        .collection("posts")
        .doc(action.payload.id)
        .delete()
        .then(() => {
          console.log("post deleted!");
        })
        .catch((e) => console.log(e));
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice;
