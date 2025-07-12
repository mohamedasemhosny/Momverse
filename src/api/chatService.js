// src/api/chatsService.js
import api from "./axios";

export const initiateChat = (payload) =>
  api.post("/api/chats/initiate", payload);
export const getChats = () => api.get("/api/chats");
export const sendMessage = (message) => api.post("/api/chats/message", message);
export const getMessages = (chatId) => api.get(`/api/chats/messages/${chatId}`);
export const deleteMessage = (messageId) =>
  api.delete(`/api/chats/messages/${messageId}`);
export const createGroupChat = (payload) =>
  api.post("/api/chats/group", payload);
export const addGroupMember = (groupId, payload) =>
  api.post(`/api/chats/group/${groupId}/members`, payload);
export const removeGroupMember = (groupId, userId) =>
  api.delete(`/api/chats/group/${groupId}/members/${userId}`);
