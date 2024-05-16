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
  if (!config.headers.common['Authorization']) {
    if (userService.getUser().nickname === '') {
      // register token이 없는 상황 (새로고침)
      authService.onSetRegisterToken();
      config.headers['Authorization'] = authClient.defaults.headers.common['Authorization'];
    } else if (userService.getUser()) {
      // access token이 만료된 상황
      authService.onRefreshToken();
      config.headers['Authorization'] = authClient.defaults.headers.common['Authorization'];
    }
  }

  return config;
});
