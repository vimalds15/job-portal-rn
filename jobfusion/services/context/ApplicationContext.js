import React, { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        loading,
        setLoading,
        setApplications,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
