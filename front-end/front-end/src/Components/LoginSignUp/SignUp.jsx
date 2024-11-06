import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";


const SignUp=()=>{
    const { userLoggedIn } = useAuth()
    const navigate = useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[isRegistering,setIsRegistering]=useState('');
    const [errorMessage,setErrorMessage]=useState('');

    const onSubmit=async(e)=>{
        e.preventDefault();
        if(!isRegistering) {
            setIsRegistering(true)
            await  createUserWithEmailAndPassword(email, password)
        }
    }
   
    return (
        <>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main className="">
                <div className="">
                    <div className="">
                        <div className="">
                            <h3 className="">Create a New Account</h3>
                        </div>

                    </div>
                    <form
                        onSubmit={onSubmit}
                        className=""
                    >
                        <div>
                            <label className="">
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                className=""
                            />
                        </div>

                        <div>
                            <label className="">
                                Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='new-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className=""
                            />
                        </div>
                    
                        <div>
                            <label className="">Confirm Password </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='off'
                                required
                                value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }}
                                className=""
                            />
                        </div>

                        {errorMessage && (
                            <span className=''>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isRegistering}
                            className={` ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="text-sm text-center">
                            Already have an account? {'   '}
                            <Link to={'/login'} className="text-center text-sm hover:underline font-bold">Continue</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}
export default SignUp;