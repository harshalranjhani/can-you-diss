import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getStorage, ref } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDNaVFg1PMwEoK1JzyuXdbVsQxFGgnmrPs",

  authDomain: "can-you-diss.firebaseapp.com",

  projectId: "can-you-diss",

  storageBucket: "can-you-diss.appspot.com",

  messagingSenderId: "1075138683324",

  appId: "1:1075138683324:web:a495119a202362aff54bb9",
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
