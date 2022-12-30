import { Fragment, useEffect } from "react";
import Layout from "../components/Layout";
import { auth, db } from "../utils/firebase";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <Fragment>
      <Layout />
    </Fragment>
  );
}
