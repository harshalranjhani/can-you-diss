import { audio } from "./audio";

const posts = [
  {
    id: 1,
    username: "Louis C. Black",
    profilePicture:
      "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535b3ad399233aa855d221_peep-82.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    postImage:
      "https://images.unsplash.com/photo-1667391557492-22031ee7d573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    audioFile: audio,
    likes: Math.floor(Math.random() * 100),
    dislikes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 100),
  },
  {
    id: 2,
    username: "Alberta T. Long",
    profilePicture:
      "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5354037488c27f4c47477f_peep-27.svg",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    postImage:
      "https://images.unsplash.com/photo-1659708709013-19c1af376e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    likes: Math.floor(Math.random() * 100),
    dislikes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 100),
  },
  {
    id: 3,
    username: "Diego Rocha Pinto",
    profilePicture:
      "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535c42c67e79a7a6962d19_peep-91.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    likes: Math.floor(Math.random() * 100),
    dislikes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 100),
  },
  {
    id: 4,
    username: "Alberta T. Long",
    profilePicture:
      "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5354037488c27f4c47477f_peep-27.svg",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
    postImage:
      "https://images.unsplash.com/photo-1659708709013-19c1af376e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    likes: Math.floor(Math.random() * 100),
    dislikes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 100),
  },
];

export default posts;
