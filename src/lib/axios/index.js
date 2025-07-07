import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Axios instance
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Add token to headers if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
