// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBt1I6QvEhvR80tX3q7K-0Y6Fy_WCdhD0",
  authDomain: "askatease-1c781.firebaseapp.com",
  projectId: "askatease-1c781",
  storageBucket: "askatease-1c781.firebasestorage.app",
  messagingSenderId: "570962385542",
  appId: "1:570962385542:web:869de17e04031c2ddf0f07",
  measurementId: "G-0122BDPXB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export  {app,auth};