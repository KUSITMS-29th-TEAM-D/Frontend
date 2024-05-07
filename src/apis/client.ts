import axios, { AxiosInstance } from 'axios';

export const noAuthClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});
