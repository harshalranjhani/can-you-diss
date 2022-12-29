import { NextResponse } from "next/server";
import { auth } from "./utils/firebase";

export default async function isLoggedIn(req) {
  // if (!auth.currentUser && req.url.includes("/dashboard")) {
  //   return NextResponse.redirect("http:localhost:3000/login");
  // }
  // console.log(auth.currentUser);
  return NextResponse.next();
}
