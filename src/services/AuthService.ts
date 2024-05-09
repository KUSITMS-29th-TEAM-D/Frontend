import { authClient } from '@/apis/client';
import { tokenAPI } from '@/apis/tokenAPI';

class AuthService {
  onLoginSuccess = (token: string) => {
    authClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  onRefreshToken = () => {
    tokenAPI
      .refresh()
      .then((response) => {
        this.onLoginSuccess(response.payload.access_token);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          window.alert('로그인이 필요합니다.');
          this.onLogout();
        }
      });
  };

  onLogout = () => {
    delete authClient.defaults.headers.common['Authorization'];
    window.location.href = '/auth';
  };
}

export const authService = new AuthService();
