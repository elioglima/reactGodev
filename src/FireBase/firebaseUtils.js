import firebase from "firebase";
import config from "../config";

const configFirebase = {
  apiKey: config.Firebase.apiKey,
  authDomain: config.Firebase.apiKey,
  databaseURL: config.Firebase.databaseURL,
  projectId: config.Firebase.projectId,
  storageBucket: config.Firebase.storageBucket,
  messagingSenderId: config.Firebase.messagingSenderId
};

export const firebaseImpl = firebase.initializeApp(configFirebase);
export const firebaseDatabase = firebase.database();
