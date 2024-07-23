// src/context/AuthContext.js

import React, { createContext, useState, useContext, useEffect } from "react";
import {
  getUserFromStorage,
  saveUserToStorage,
  removeUserFromStorage,
} from "../utils/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromStorage());

  const login = (userData) => {
    saveUserToStorage(userData);
    setUser(userData);
  };

  const logout = () => {
    removeUserFromStorage();
    setUser(null);
  };

  const isAuthenticated = () => !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
