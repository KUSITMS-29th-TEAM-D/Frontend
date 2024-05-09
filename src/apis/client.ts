import axios, { AxiosInstance } from 'axios';

import { authService } from '@/services/AuthService';
import { userService } from '@/services/UserService';

export const noAuthClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

export const authClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

authClient.interceptors.request.use((config) => {
  if (!authClient.defaults.headers.common['Authorization']) {
    if (userService.getUser() === '') {
      // register token이 만료된 상황
      userService.removeUser();
      window.location.href = '/auth';
    } else if (userService.getUser()) {
      // access token이 만료된 상황
      authService.onRefreshToken();
    }
  }

  return config;
});
