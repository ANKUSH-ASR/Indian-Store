// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSvz3mIgmZRgopLZVOD7-awmnIk6dUn0o",
  authDomain: "indian-store-07.firebaseapp.com",
  projectId: "indian-store-07",
  storageBucket: "indian-store-07.appspot.com",
  messagingSenderId: "257221038992",
  appId: "1:257221038992:web:d39bb492f72f35b580d915",
  measurementId: "G-34NHT08ER4"
  // apiKey: "AIzaSyBSvz3mIgmZRgopLZVOD7-awmnIk6dUn0o",
  // authDomain: "",
  // projectId: "indian-store-07",
  // storageBucket: "",
  // messagingSenderId: "",
  // appId: "",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
