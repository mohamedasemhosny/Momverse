// src/api/authService.js
import api from "./axios";

export const register = (data) => api.post("/api/auth/register", data);
export const login = (credentials) => api.post("/api/auth/login", credentials);
export const forgotPassword = (email) =>
  api.post("/api/auth/forgot-password", { email });
export const resetPassword = (payload) =>
  api.post("/api/auth/reset-password", payload);
export const changePassword = (payload) =>
  api.put("/api/auth/change-password", payload);
export const changeEmail = (payload) =>
  api.put("/api/auth/change-email", payload);
