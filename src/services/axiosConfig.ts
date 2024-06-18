import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8085";

// Create an axios instance
export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Function to set token
export const setAuthToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};