// src/api/usersService.js
import api from "./axios";

export const getProfile = () => api.get("/api/users/profile");
export const updateProfile = (data) => api.put("/api/users/profile", data);
export const changeUserPassword = (payload) =>
  api.put("/api/users/change-password", payload);
export const getAllUsers = () => api.get("/api/users");
export const changeUserRole = (payload) =>
  api.put("/api/users/change-role", payload);
export const banUser = (id) => api.put(`/api/users/ban/${id}`);
export const unbanUser = (id) => api.put(`/api/users/unban/${id}`);
export const getFriends = () => api.get("/api/users/friends");
export const addFriend = (payload) =>
  api.post("/api/users/friends/add", payload);
export const removeFriend = (payload) =>
  api.post("/api/users/friends/remove", payload);
export const getGroups = () => api.get("/api/users/groups");
export const addGroup = (payload) => api.post("/api/users/groups/add", payload);
export const removeGroup = (payload) =>
  api.post("/api/users/groups/remove", payload);
export const getFavourites = () => api.get("/api/users/favourites");
export const addFavourite = (payload) =>
  api.post("/api/users/favourites/add", payload);
export const removeFavourite = (payload) =>
  api.post("/api/users/favourites/remove", payload);
export const getStaticFavourites = () =>
  api.get("/api/users/static-favourites");
export const addStaticFavourite = (payload) =>
  api.post("/api/users/static-favourites/add", payload);
export const removeStaticFavourite = (payload) =>
  api.post("/api/users/static-favourites/remove", payload);
export const getDoctors = () => api.get("/api/users/doctors");
export const addDoctor = (payload) =>
  api.post("/api/users/doctors/add", payload);
export const updateLanguage = (language) =>
  api.put("/api/users/language", { language });
