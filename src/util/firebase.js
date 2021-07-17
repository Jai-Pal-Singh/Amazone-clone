import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDE_-d85srG6L0wQJ9vUD5vVe8zH16Dv0A",
  authDomain: "clone-2788a.firebaseapp.com",
  projectId: "clone-2788a",
  storageBucket: "clone-2788a.appspot.com",
  messagingSenderId: "995126438655",
  appId: "1:995126438655:web:0f893083f876924c56faca",
  measurementId: "G-YLZL366CWC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
