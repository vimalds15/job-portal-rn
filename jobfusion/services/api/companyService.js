import { apiClient } from "./client.js";

export const getAllCompanies = async () => {
  try {
    const response = await apiClient.get("/company");
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch company");
  }
};
export const getUnverifiedCompanies = async () => {
  try {
    const response = await apiClient.get("/company/request");
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch company");
  }
};

export const getCompanyById = async (companyId) => {
  try {
    const response = await apiClient.get(`/company/${companyId}`);
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch company");
  }
};

export const createCompany = async (companyData) => {
  try {
    const response = await apiClient.post("/company", companyData);
    return response.data;
  } catch (error) {
    throw new Error("Unable to create company");
  }
};

export const updateCompany = async (companyId, companyData) => {
  try {
    const response = await apiClient.put(`/company/update/${companyId}`, companyData);
    return response.data;
  } catch (error) {
    throw new Error("Unable to update company");
  }
};

export const deleteCompany = async (companyId) => {
  try {
    const response = await apiClient.delete(`/company/${companyId}`);
    return response.data;
  } catch (error) {
    throw new Error("Unable to delete company");
  }
};
