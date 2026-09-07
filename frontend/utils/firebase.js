// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cortexai-9d7bb.firebaseapp.com",
  projectId: "cortexai-9d7bb",
  storageBucket: "cortexai-9d7bb.firebasestorage.app",
  messagingSenderId: "1076253949073",
  appId: "1:1076253949073:web:b545ba604c349fdad59330",
  measurementId: "G-ZYJBWXLM8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();