// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "blog-site-16a3f.firebaseapp.com",
  projectId: "blog-site-16a3f",
  storageBucket: "blog-site-16a3f.appspot.com",
  messagingSenderId: "371684412467",
  appId: "1:371684412467:web:e48411203caa950617e746"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);