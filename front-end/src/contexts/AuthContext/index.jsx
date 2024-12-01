import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../Firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import signOut

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [isGoogleUser, setIsGoogleUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });

      // Check if provider is email and password login
      const isEmail = user.providerData.some(
        (provider) => provider.providerId === "password"
      );
      setIsEmailUser(isEmail);

      // Check if the auth provider is Google or not
      // const isGoogle = user.providerData.some(
      //   (provider) => provider.providerId === GoogleAuthProvider.PROVIDER_ID
      // );
      // setIsGoogleUser(isGoogle);

      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }

    setLoading(false);
  }

  // Implement logout function
  async function logout() {
    try {
      await signOut(auth); // Firebase's signOut method
      setCurrentUser(null); // Clear the current user state
      setUserLoggedIn(false); // Update userLoggedIn state
    } catch (error) {
      console.error("Logout failed:", error);
      throw error; // Optional: Rethrow the error if needed
    }
  }

  const value = {
    userLoggedIn,
    isEmailUser,
    isGoogleUser,
    currentUser,
    setCurrentUser,
    logout, // Add logout to the provided context value
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
