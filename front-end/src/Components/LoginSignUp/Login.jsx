import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { doSignInWithEmailandPassword, doSignInWithGoogle } from "../../Firebase/auth";

const Login = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  return (
    <main className="flex justify-center items-center bg-emerald-100 min-h-screen w-full gap-4 p-6 rounded-lg shadow-lg">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Login</h3>
        {userLoggedIn && <p>You're already logged in!</p>}
        {!userLoggedIn && (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" disabled={isSigningIn}>
              {isSigningIn ? "Signing in..." : "Login"}
            </button>
            <button onClick={onGoogleSignIn} disabled={isSigningIn}>
              {isSigningIn ? "Signing in..." : "Sign in with Google"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
};

export default Login;
