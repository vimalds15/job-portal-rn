import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://job-portal-rn.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});
