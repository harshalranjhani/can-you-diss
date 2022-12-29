import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import { useState, useRef, useEffect } from "react";

import Image from "next/image";

import { auth, db, storage } from "../../utils/firebase";
import firebase from "firebase/compat/app";
import { ref } from "firebase/compat/storage";
import { v4 } from "uuid";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import { useRouter } from "next/router";

const ProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(`ID IS : ${id}`);
  const queryDb = async (id) => {
    let challengedUserId;
    const response = db
      .collection("users")
      .where("displayName", "==", "Checking Heyther")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          console.log(doc.id());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    return challengedUserId;
  };
  // const func = (callback) => {
  //   callback(id);
  // };
  // useEffect(() => {
  //   setTimeout(() => {
  //     func(queryDb);
  //   }, 2000);
  // }, []);

  // let user = queryDb(id);
  return (
    <div className="h-screen w-screen flex justify-end">
      <Sidebar />
      <main className="w-10/12 xl:w-3/4 ">
        <Navbar currentContext={"Home"} />
        <div className="app-container w-full flex justify-center">
          <div className="w-full xl:w-2/3 flex flex-col items-center">
            {/* Posts */}
            <h1>Currently logged in as : </h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;

// const queryDb = async (user) => {
//   const response = await db
//     .collection("users")
//     .where("displayName", "==", user)
//     .get()
//     .then((querySnapshot) => {
//       user = querySnapshot.docs[0];
//     })
//     .catch((error) => {
//       console.log("Error getting documents: ", error);
//     });
//   return user;
// };
// const router = useRouter();
// const id = router.query.id;
// const user = await queryDb(id);
