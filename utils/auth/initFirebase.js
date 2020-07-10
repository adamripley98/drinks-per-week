import firebase from "firebase/app";
import "firebase/auth"; // If you need it
import "firebase/firestore"; // If you need it
import "firebase/storage"; // If you need it
import "firebase/database";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_FIREBASE_APP_ID
};

if (!firebase.apps.length) {
  console.log("initializing app");
  firebase.initializeApp(clientCredentials);
}

let currentUser;
firebase.auth().onAuthStateChanged(function (user) {
  // user hols the reference to currentUser variable.
  currentUser = user;
  console.log("curr us", firebase.auth());
});

export { firebase };
