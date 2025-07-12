// src/api/postsService.js
import api from "./axios";

export const createPost = (post) => api.post("/api/posts", post);
export const getPosts = (params) => api.get("/api/posts", { params });
export const getPostById = (id) => api.get(`/api/posts/${id}`);
export const updatePost = (id, data) => api.put(`/api/posts/${id}`, data);
export const deletePost = (id) => api.delete(`/api/posts/${id}`);
export const getMyPosts = () => api.get("/api/posts/my-posts");
export const getResearchBySubcategory = (subCategory) =>
  api.get(`/api/posts/research/subcategory/${subCategory}`);
export const getCoursesBySubcategory = (subCategory) =>
  api.get(`/api/posts/courses/subcategory/${subCategory}`);
export const getResearchGrouped = () => api.get("/api/posts/research/grouped");
export const getCoursesGrouped = () => api.get("/api/posts/courses/grouped");
