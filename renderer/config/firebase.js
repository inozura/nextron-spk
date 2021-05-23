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

if (firebase.apps.length === 0) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
// export const db = firebase.database();
