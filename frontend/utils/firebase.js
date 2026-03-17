// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginvirtualcourses-1d58f.firebaseapp.com",
  projectId: "loginvirtualcourses-1d58f",
  storageBucket: "loginvirtualcourses-1d58f.firebasestorage.app",
  messagingSenderId: "623703438521",
  appId: "1:623703438521:web:c030b102da0d40d8ce9768",
  measurementId: "G-S48R3F42CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const provider= new GoogleAuthProvider()
export {auth,provider}