import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJFrLGTuwHKI2O-JZn1l_mbEaJ5to42GA",
  authDomain: "twitter-react-8dfc4.firebaseapp.com",
  projectId: "twitter-react-8dfc4",
  storageBucket: "twitter-react-8dfc4.appspot.com",
  messagingSenderId: "467172162949",
  appId: "1:467172162949:web:52a579a93a69ac03d958ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
