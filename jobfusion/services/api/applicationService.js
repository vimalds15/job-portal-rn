import { apiClient } from "./client.js";

export const getAllApplications = async () => {
  try {
    const response = await apiClient.get("/application");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Unable to fetch application"
    );
  }
};

export const getAllApplicationsUser = async (userName) => {
  try {
    const response = await apiClient.get(`/application/user/${userName}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Unable to fetch application"
    );
  }
};

export const getAllApplicationsCompany = async (companyUserName) => {
  try {
    const response = await apiClient.get(
      `/application/company/${companyUserName}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Unable to fetch application"
    );
  }
};

export const getApplicationById = async (applicationId) => {
  try {
    const response = await apiClient.get(`/application/${applicationId}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Unable to fetch application"
    );
  }
};

export const createApplication = async (applicationData) => {
  try {
    const response = await apiClient.post("/application", applicationData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Unable to create application"
    );
  }
};

export const updateApplication = async (applicationId, applicationData) => {
  try {
    const response = await apiClient.put(
      `/application/${applicationId}`,
      applicationData
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Unable to update application"
    );
  }
};

export const deleteApplication = async (applicationId) => {
  try {
    const response = await apiClient.delete(`/application/${applicationId}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Unable to delete application"
    );
  }
};
