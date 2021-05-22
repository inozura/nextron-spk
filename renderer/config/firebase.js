import firebase from "firebase/app";
import "firebase/firestore";

const clientCredentials = {
  apiKey: "AIzaSyCnd1otQSllXnWzAEGZ_y3euU_-pMckjAQ",
  authDomain: "spk-ahs.firebaseapp.com",
  projectId: "spk-ahs",
  storageBucket: "spk-ahs.appspot.com",
  messagingSenderId: "489946727659",
  appId: "1:489946727659:web:15fd1f82b62ba515446aae",
};

try {
  firebase.initializeApp(clientCredentials);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

export default firebase;
