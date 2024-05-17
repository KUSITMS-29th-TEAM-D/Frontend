import { authClient } from '@/apis/client';
import { tokenAPI } from '@/apis/tokenAPI';
import { userService } from '@/services/UserService';

class AuthService {
  onLoginSuccess = (token: string) => {
    authClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  onSaveRegisterToken = (registerToken: string) => {
    window.sessionStorage.setItem('registerToken', registerToken);
  };

  onSetRegisterToken = () => {
    const registerToken = window.sessionStorage.getItem('registerToken');
    if (registerToken) {
      this.onLoginSuccess(registerToken);
    } else {
      window.alert('로그인이 필요합니다.');
      this.onLogout();
    }
  };

  onRemoveRegisterToken = () => {
    window.sessionStorage.removeItem('registerToken');
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
    userService.removeUser();
    window.location.href = '/auth';
  };
}

export const authService = new AuthService();
