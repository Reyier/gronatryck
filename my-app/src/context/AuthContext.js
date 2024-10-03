/*


import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";  // Correctly import the navigate hook
import { auth } from "../utils/firebase";        // Import the correct Firebase auth instance from the updated firebase.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";  // Import necessary auth functions

// Create Auth Context
const AuthContext = createContext();

// Hook to use the Auth Context
export function useAuth() {
  return useContext(AuthContext);
}

// Auth Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);       // Declare user state
  const navigate = useNavigate();               // Initialize navigate hook

  // Register function
  const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setUser(userCredential.user);
        navigate('/');  // Redirect to home after successful registration
      })
      .catch(error => console.error(error));
  };

  // Login function
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setUser(userCredential.user);
        navigate('/');  // Redirect to home after successful login
      })
      .catch(error => console.error(error));
  };

  // Logout function
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);  // Clear the user state after logout
      })
      .catch(error => console.error(error));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
*/