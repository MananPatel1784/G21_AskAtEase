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
    <div className="login-container">
      <h2>Login</h2>
      {userLoggedIn && <p>You're already logged in!</p>}
      {!userLoggedIn && (
        <form onSubmit={onSubmit} className="login-form">
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
  );
};

export default Login;
