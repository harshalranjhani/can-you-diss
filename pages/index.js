import { Fragment, useEffect } from "react";
import Layout from "../components/Layout";
import { db } from "../utils/firebase";

export default function Home() {
  useEffect(() => {
    db.collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => console.log(doc.data()));
      });
  }, []);

  return (
    <Fragment>
      <Layout />
    </Fragment>
  );
}
