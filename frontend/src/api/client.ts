import axios from "axios";
import { getToken } from "../auth/token";

export const api = axios.create({
  baseURL: "http://localhost:5175/api",
});

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});