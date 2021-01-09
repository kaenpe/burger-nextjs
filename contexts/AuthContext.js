import React, { createContext, useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return projectAuth.onIdTokenChanged(async (user) => {
      setLoading(true);
      if (!user) {
        setAuth(null);
        setLoading(false);
      } else {
        setAuth(user);
        setLoading(false);
      }
    });
  }, []);

  const signup = (email, password) => {
    projectAuth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {})
      .catch((error) => {
        // ..
      });
  };

  const login = (email, password) => {
    projectAuth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {})
      .catch((error) => {
        // ..
      });
  };

  const signOut = () => {
    projectAuth.signOut();
  };
  const value = { auth, setAuth, signup, login, signOut, loading };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
//styled//
//vars//
//states//
//functions//
//effects//
