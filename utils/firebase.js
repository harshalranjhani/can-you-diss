import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLoqKjCxY5I99f9E9fNPgWDhfbMrmm5MM",
  authDomain: "canyoudiss.firebaseapp.com",
  projectId: "canyoudiss",
  storageBucket: "canyoudiss.appspot.com",
  messagingSenderId: "345768283022",
  appId: "1:345768283022:web:bfc68ba12d77e62ca3f2df",
  measurementId: "G-V1YDEQMKTY",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
