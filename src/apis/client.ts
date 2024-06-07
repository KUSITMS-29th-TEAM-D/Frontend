import axios, { AxiosInstance } from 'axios';

import { tokenService } from '@/services/TokenService';

export const noAuthClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

export const authClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

authClient.interceptors.request.use((config) => {
  config.headers['Authorization'] = tokenService.getHeader();
  return config;
});

authClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await tokenService.updateAccessToken();
        originalRequest.headers['Authorization'] = tokenService.getHeader();
        return axios(originalRequest);
      } catch (e) {
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  }
);
