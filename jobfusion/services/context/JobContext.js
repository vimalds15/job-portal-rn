import React, { createContext, useState } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateJobs = (info) => {
    setJobs(info);
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        setLoading,
        updateJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
