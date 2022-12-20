import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKnq9LjDG8PUo0cQoiRmPqkHZ7OoyLt1o",
  authDomain: "canyoudiss-1fbee.firebaseapp.com",
  projectId: "canyoudiss-1fbee",
  storageBucket: "canyoudiss-1fbee.appspot.com",
  messagingSenderId: "1090599035931",
  appId: "1:1090599035931:web:457cb2f2a653f8dea244be",
};

let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
const storage = getStorage();

export { db, auth, storage };
