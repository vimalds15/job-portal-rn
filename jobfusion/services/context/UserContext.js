import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateUserInfo = (info) => {
    setUserInfo(info);
  };

  const clearUserInfo = () => {
    setUserInfo(null);
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        loading,
        setLoading,
        updateUserInfo,
        clearUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
