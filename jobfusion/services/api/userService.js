import { apiClient } from "./client.js";

export const getUser = async (userName) => {
  try {
    console.log("userName", userName);
    const response = await apiClient.get(`/user/${userName}`);
    console.log("response", response);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Unable to fetch user");
  }
};

export const getAllUsers = async () => {
  try {
    const response = await apiClient.get("/user");
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch users");
  }
};

export const updateUser = async (userId, userData) => {
  try {
    console.log("userId", userId, "data", userData);
    const response = await apiClient.put(`/user/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw new Error("Unable to update user");
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await apiClient.delete(`/user/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error("Unable to delete user");
  }
};
