import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://192.168.20.227:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
