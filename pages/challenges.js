import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";

function Challenges() {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!auth.currentUser) {
      console.log("Null user");
      console.log(auth.currentUser);
      return;
    }
    setLoading(true);
    let challengesArray = [];
    db.collection("challengedUsers")
      .where("challengeTo", "==", auth.currentUser.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          challengesArray.push({ ...doc.data(), id: doc.id });
        });
      })
      .then(() => {
        setChallenges(challengesArray);
        console.log(challenges);
        console.log(auth.currentUser);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    setLoading(false);
  }, []);

  const acceptChallenge = (id) => {
    console.log(id);
    db.collection("challengedUsers")
      .doc(id)
      .update({ challengeAccepted: true });

    router.push(`/accept-challenge/${id}`);
  };

  return (
    <>
      <h1>Challenges for you so far!</h1>
      {!loading
        ? challenges.map((doc) => (
            <>
              <h3 key={doc._id}>Name: {doc.challengedBy}</h3>
              <h3>
                Challenge Accepted:{" "}
                <span
                  style={{ color: doc.challengeAccepted ? "green" : "red" }}
                >
                  {doc.challengeAccepted ? "True" : "False"}
                </span>
              </h3>
              <h1>Accept Challenge? </h1>
              <button
                style={{ color: "blue" }}
                onClick={() => {
                  acceptChallenge(doc.id);
                }}
              >
                Yes
              </button>
            </>
          ))
        : null}
      {!challenges.length && <h1>Yay! No challenges for now!</h1>}
      <br />
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        GO BACK
      </button>
    </>
  );
}

export default Challenges;
