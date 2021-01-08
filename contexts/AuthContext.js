import React, { createContext, useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    return projectAuth.onIdTokenChanged(async (user) => {
      if (!user) {
        setAuth(null);
      } else {
        setAuth(user);
      }
    });
  }, []);

  const signup = (email, password) => {
    projectAuth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {})
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  const login = (email, password) => {
    projectAuth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {})
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  const signOut = () => {
    projectAuth.signOut();
  };
  const value = { auth, setAuth, signup, login, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
//styled//
//vars//
//states//
//functions//
//effects//
