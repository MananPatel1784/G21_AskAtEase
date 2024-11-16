import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  doSignInWithEmailandPassword,
  doSignInWithGoogle,
} from "../../Firebase/auth";
import AskAtEase from "../Assets/AskAtEase.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailandPassword(email, password);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsSigningIn(false);
      }
    }
  };
  const navigate = useNavigate();
  const handleRedirect = () => {
      navigate("/signup"); // Replace "/signup" with your desired route
  };
  return (
    <main className="font-lexend flex justify-center items-center bg-gradient-to-b from-customGradient1 to-customGradient2 min-h-screen w-full p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row p-8 space-y-6 md:space-y-0 md:space-x-8">
        {/* Login Form */}
        <div className="w-full self-center md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Login
          </h3>
          {userLoggedIn && (
            <p className="justify-center text-center text-green-600">
              You're already logged in!
            </p>
          )}
          {!userLoggedIn && (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm text-center">
                  {errorMessage}
                </p>
              )}
              <button
                type="submit"
                disabled={isSigningIn}
                className="w-full py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-200 disabled:bg-gray-400"
              >
                {isSigningIn ? "Signing in..." : "Login"}
              </button>
              <button
                onClick={onGoogleSignIn}
                disabled={isSigningIn}
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 disabled:bg-gray-400 mt-2"
              >
                {isSigningIn ? "Signing in..." : "Sign in with Google"}
              </button>
              {/* // added new user option that will direct it to the sign up page */}
              <button onClick={handleRedirect}>New User?</button>
            </form>
          )}
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={AskAtEase} // Replace with your image URL
            alt="Login Illustration"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </main>
  );
};

export default Login;
