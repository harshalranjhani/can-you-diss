import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdLTytTWH8PtOxpJ00VFcIsg-d2CkfqV8",
  authDomain: "canyoudiss-b7d04.firebaseapp.com",
  projectId: "canyoudiss-b7d04",
  storageBucket: "canyoudiss-b7d04.appspot.com",
  messagingSenderId: "676346334368",
  appId: "1:676346334368:web:eacd1d3825c0642eb70dc5",
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
