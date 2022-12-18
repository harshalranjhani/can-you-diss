import { createSlice } from "@reduxjs/toolkit";

import audio from "../data/audio";

const postSlice = createSlice({
  name: "post",
  initialState: [
    {
      id: 1,
      username: "Louis C. Black",
      dissedUserName: "Alberta T. Long",
      profilePicture:
        "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535b3ad399233aa855d221_peep-82.svg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      postImage:
        "https://images.unsplash.com/photo-1667391557492-22031ee7d573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
      audioFile: audio,
      likes: 65,
      dislikes: 46,
      comments: { count: 94, commentsData: [] },
    },
    {
      id: 2,
      username: "Alberta T. Long",
      dissedUserName: "Diego Rocha Pinto",
      profilePicture:
        "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5354037488c27f4c47477f_peep-27.svg",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
      postImage:
        "https://images.unsplash.com/photo-1659708709013-19c1af376e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      likes: 89,
      dislikes: 57,
      comments: { count: 2, commentsData: [] },
    },
    {
      id: 3,
      username: "Diego Rocha Pinto",
      dissedUserName: "T. Small",
      profilePicture:
        "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535c42c67e79a7a6962d19_peep-91.svg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      likes: 74,
      dislikes: 4,
      comments: { count: 16, commentsData: [] },
    },
    {
      id: 4,
      username: "Louis C. Black",
      dissedUserName: "T. Small",
      profilePicture:
        "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5354037488c27f4c47477f_peep-27.svg",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
      postImage:
        "https://images.unsplash.com/photo-1659708709013-19c1af376e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      likes: 78,
      dislikes: 80,
      comments: { count: 92, commentsData: [] },
    },
  ],

  reducers: {
    likeDislikePost(state, action) {
      if (state.length !== 0) {
        state.forEach((elem) => {
          if (elem.id === action.payload.id) {
            if (action.type === "LIKE") {
              elem.likes += 1;
            } else if (action.type === "DISLIKE") {
              elem.dislikes += 1;
            } else {
              console.log("Something unexpected happened in likeDislikePost");
            }
          }
        });
      }
      return state;
    },
    commentOnPost(state, action) {
      state.forEach((elem) => {
        if (elem.id === action.payload.id) {
          elem.comments.count += 1;
          // elem.comments.commentsData = [
          //   ...elem.comments.commentsData,
          //   action.payload.comment,
          // ];
        }
      });
    },
    deletePost(state, action) {
      const newState = state.filter((elem) => {
        if (elem.id !== action.payload.id) {
          return elem;
        }
      });
      return newState;
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice;
