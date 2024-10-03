import React, { createContext, useState } from 'react';

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateCompanyInfo = (info) => {
    setCompanyInfo(info);
  };

  const clearCompanyInfo = () => {
    setCompanyInfo(null);
  };

  return (
    <CompanyContext.Provider
      value={{
        companyInfo,
        loading,
        setLoading,
        updateCompanyInfo,
        clearCompanyInfo,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
