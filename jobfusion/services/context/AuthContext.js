import React, { createContext, useState, useEffect } from "react";
import { router } from "expo-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/login");
    }
  }, [isLoggedIn]);

  const login = (userRole) => {
    setIsLoggedIn(true);
    setRole(userRole);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, role, login, logout, error, setError }}
    >
      {children}
    </AuthContext.Provider>
  );
};
