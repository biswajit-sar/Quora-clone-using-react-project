// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyChEWa8o9zksHPg4CV7LkvkPgVBF_axGmw",
  authDomain: "quera-clone.firebaseapp.com",
  projectId: "quera-clone",
  storageBucket: "quera-clone.appspot.com",
  messagingSenderId: "600370109645",
  appId: "1:600370109645:web:aef34c72aa00db56b85d84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const storage = getFirestore(app)