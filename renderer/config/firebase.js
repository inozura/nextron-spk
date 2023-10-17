import firebase from "firebase/app";
import "firebase/firestore";

const clientCredentials = {
  apiKey: "YOUR_APIKEY",
  authDomain: "YOUR_APIKEY",
  projectId: "YOUR_APIKEY",
  storageBucket: "YOUR_APIKEY",
  messagingSenderId: "YOUR_APIKEY",
  appId: "YOUR_APIKEY",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
// export const db = firebase.database();
