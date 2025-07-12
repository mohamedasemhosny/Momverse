import { axiosInstance } from "@/lib/axios";

export const register = async (userData) => {
  const response = await axiosInstance.post("/api/auth/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axiosInstance.post("/api/auth/login", userData);
  return response.data;
};

export const fetchProfile = async () => {
  const response = await axiosInstance.get("/api/users/profile");
  return response.data;
};

// Update user profile
export const updateProfile = async (data) => {
  const response = await axiosInstance.put("/api/users/profile", data);
  return response.data;
};

// Change password
export const changePassword = async (data) => {
  const response = await axiosInstance.put("/api/users/change-password", data);
  return response.data;
};
