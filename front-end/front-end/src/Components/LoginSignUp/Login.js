import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext";

const onSubmit =async(e)=>{
    e.preventDefault();
    if(!isSigningIn){
        setIsSigningIn(true);
    }
}
const Login=()=>{
    const {userLoggedIn}=useAuth();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [isSigningIn,setIsSigningIn]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');
}