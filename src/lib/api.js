import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export const api = axios.create({
  baseURL: baseURL + "/api",
  headers: { "Content-Type": "application/json" },
});
