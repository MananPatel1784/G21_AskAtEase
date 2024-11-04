import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import {auth} from './firebase'

export const createUsingEmailandPassword=async(email,password)=>{
    return createUsingEmailandPassword(auth,email,password);
};

export const signInWithEmailandPassword=async(email,password)=>{
    return signInWithEmailandPassword(auth,email,password);
};

export const signInWithGoogle=async()=>{
    const provider= new GoogleAuthProvider();
    const result=await signInWithPopup(auth,provider);
};

export const doSignOut=()=>{
    return auth.signOut();
};