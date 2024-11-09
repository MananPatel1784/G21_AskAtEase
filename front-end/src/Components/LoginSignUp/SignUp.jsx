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

        <main className="flex justify-center items-center bg-emerald-100 min-h-screen w-full gap-4 p-6 rounded-lg shadow-lg">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Create a New Account</h3>
            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        disabled={isRegistering}
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input
                        type="password"
                        disabled={isRegistering}
                        autoComplete="off"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                </div>

                {errorMessage && (
                    <span className="block text-sm text-red-600 mt-2">{errorMessage}</span>
                )}

                <button
                    type="submit"
                    disabled={isRegistering}
                    className={`w-full py-2 mt-4 font-semibold rounded-md text-white ${
                        isRegistering
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transition duration-300'
                    }`}
                >
                    {isRegistering ? 'Signing Up...' : 'Sign Up'}
                </button>

                <div className="text-sm text-center mt-4">
                    Already have an account?{' '}
                    <Link to={"/Login"} className="text-emerald-600 font-bold hover:underline">
                        Continue
                    </Link>
                </div>
            </form>
        </div>
        </main>

        </>
    )
}
export default SignUp;