import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  signOut 
} from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMockMode, setIsMockMode] = useState(false);

  useEffect(() => {
    const isApiKeyMock = !import.meta.env.VITE_FIREBASE_API_KEY || 
                         import.meta.env.VITE_FIREBASE_API_KEY.includes("FakeKey");

    if (isApiKeyMock) {
      setIsMockMode(true);
      const cachedUser = localStorage.getItem("hiresense_user");
      if (cachedUser) {
        setUser(JSON.parse(cachedUser));
      }
      setLoading(false);
    } else {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      }, () => {
        setIsMockMode(true);
        setLoading(false);
      });
      return () => unsubscribe();
    }
  }, []);

  // --- Upgrade Offline Simulation Database Engines ---
  
  const signup = async (email, password) => {
    if (isMockMode) {
      // Fetch or initialize our local user registry database
      const mockDb = JSON.parse(localStorage.getItem("hiresense_mock_db") || "{}");
      
      if (mockDb[email]) {
        throw new Error("auth/email-already-in-use: An account with this email already exists.");
      }

      // Save credentials locally
      mockDb[email] = password;
      localStorage.setItem("hiresense_mock_db", JSON.stringify(mockDb));

      const mockProfile = { email, uid: "mock_user_" + Date.now() };
      localStorage.setItem("hiresense_user", JSON.stringify(mockProfile));
      setUser(mockProfile);
      return mockProfile;
    }
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    if (isMockMode) {
      const mockDb = JSON.parse(localStorage.getItem("hiresense_mock_db") || "{}");
      
      // 1. Check if the email exists in our simulation database
      if (!mockDb[email]) {
        throw new Error("auth/user-not-found: No user profile matches this email address.");
      }

      // 2. Actively check if the typed password matches the database string
      if (mockDb[email] !== password) {
        throw new Error("auth/wrong-password: The password you entered is incorrect.");
      }

      const mockProfile = { email, uid: "mock_user_" + Date.now() };
      localStorage.setItem("hiresense_user", JSON.stringify(mockProfile));
      setUser(mockProfile);
      return mockProfile;
    }
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = async () => {
    if (isMockMode) {
      const mockProfile = { email: "workspace.user@domain.com", uid: "google_mock" };
      localStorage.setItem("hiresense_user", JSON.stringify(mockProfile));
      setUser(mockProfile);
      return mockProfile;
    }
    return signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    localStorage.removeItem("hiresense_user");
    setUser(null);
    if (!isMockMode) {
      await signOut(auth);
    }
  };

  const value = { user, signup, login, loginWithGoogle, logout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}