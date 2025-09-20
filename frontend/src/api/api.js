import axios from "axios";

// Use relative path so Vite proxy handles it
const api = axios.create({
  baseURL: "/api",
});

// Auth
export const login = (data) => api.post("/auth/login", data);
export const register = (data) => api.post("/auth/register", data);

// Users
export const getUsers = () => api.get("/users");

// Quizzes
export const getQuizzes = () => api.get("/quizzes");
export const createQuiz = (data) => api.post("/quizzes", data);

// Assignments
export const getAssignments = () => api.get("/assignments");
export const createAssignment = (data) => api.post("/assignments", data);

// Files
export const uploadFile = (formData) =>
  api.post("/files", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const getFiles = () => api.get("/files");

// Ping test
export const ping = () => api.get("/ping");

export default api;
