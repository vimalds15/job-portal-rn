import { apiClient } from "./client.js";

export const getAllJobs = async () => {
  try {
    const response = await apiClient.get("/job");
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch job");
  }
};

export const getJobById = async (jobId) => {
  try {
    const response = await apiClient.get(`/job/${jobId}`);
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch job");
  }
};

export const getJobByCompanyId = async (companyId) => {
  try {
    const response = await apiClient.get(`/job/company/${companyId}`);
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch job");
  }
};

export const createJob = async (jobData) => {
  try {
    const response = await apiClient.post("/job/create", jobData);
    return response.data;
  } catch (error) {
    throw new Error("Unable to create job");
  }
};

export const updateJob = async (jobId, jobData) => {
  try {
    const response = await apiClient.put(`/job/${jobId}`, jobData);
    return response.data;
  } catch (error) {
    throw new Error("Unable to update job");
  }
};

export const deleteJob = async (jobId) => {
  try {
    const response = await apiClient.delete(`/job/${jobId}`);
    return response.data;
  } catch (error) {
    throw new Error("Unable to delete job");
  }
};
