import axios from 'axios';

import { authClient } from '@/apis/client';
import { tokenAPI } from '@/apis/tokenAPI';
import { userService } from '@/services/UserService';

class AuthService {
  getRefreshToken = async () => {
    try {
      const response = await tokenAPI.refresh();
      return response.payload.access_token;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
        window.alert('로그인이 필요합니다.');
        this.onLogout();
      }
    }
  };

  setAuthToken(token: string) {
    authClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  setRegisterToken(registerToken: string) {
    window.sessionStorage.setItem('registerToken', registerToken);
  }

  getRegisterToken = () => {
    window.sessionStorage.getItem('registerToken');
  };

  deleteRegisterToken = () => {
    window.sessionStorage.removeItem('registerToken');
  };

  onLogout = () => {
    delete authClient.defaults.headers.common['Authorization'];
    userService.removeUser();
    window.location.href = '/auth';
  };
}

export const authService = new AuthService();
