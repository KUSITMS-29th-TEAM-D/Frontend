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
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzM4NCJ9.eyJ1c2VySWQiOiIxNTlmNDU0Mi1lYmZmLTRhY2QtYTYwMy1hNGZhNGY5NDUxN2YiLCJpYXQiOjE3MTYzMDk2NTAsImV4cCI6MTcxNjU2ODg1MH0.Ror8pzHZ1eaUWgWsBJoihEp7xeBgw1H19ctzH1AwFntUrbU3NjrkSdBvXI9ZZy9C`,
  },
});

/* authClient.interceptors.request.use((config) => {
  if (userService.getUserNickname() === '') {
    const registerToken = authService.getRegisterToken();
    if (registerToken !== null && registerToken !== undefined) {
      config.headers['Authorization'] = `Bearer ${registerToken}`;
    } else {
      window.alert('로그인이 필요합니다.');
      authService.onLogout();
    }
  }

  return config;
}); */

/* authClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await authService.getRefreshToken();
      authService.setAuthToken(access_token);
      return authClient(originalRequest);
    }
    return Promise.reject(error);
  }
); */
