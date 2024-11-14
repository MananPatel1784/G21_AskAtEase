import { auth } from "./firebase";
import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
//   sendEmailVerification,
//   updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const createUsingEmailandPassword=async(email,password)=>{
    return createUsingEmailandPassword(auth,email,password);
};

export const doSignInWithEmailandPassword=async(email,password)=>{
    return doSignInWithEmailandPassword(auth,email,password);
};

export const doSignInWithGoogle=async()=>{
    const provider= new GoogleAuthProvider();
    const result=await signInWithPopup(auth,provider);
};

export const doSignOut=()=>{
    return auth.signOut();
};