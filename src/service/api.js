import axios from "axios";
export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
  headers: { "Content-Type": "application/json" },
});
