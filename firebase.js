import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBrHBRJzTnQSTtSUrOeWX7_14JyAz-ITp4",
  authDomain: "signal-clone-a3b3c.firebaseapp.com",
  projectId: "signal-clone-a3b3c",
  storageBucket: "signal-clone-a3b3c.appspot.com",
  messagingSenderId: "196193671410",
  appId: "1:196193671410:web:53fe0ffbcb4762ca97186b",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
