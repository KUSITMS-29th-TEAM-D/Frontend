import { Cookies } from 'react-cookie';

import { getAccessToken } from '@/apis/tokenAPI/getAccessToken';
import { userService } from '@/services/UserService';

class TokenService {
  cookies = new Cookies();
  alertShown = false;
  isRefreshing = false;

  constructor() {
    this.alertShown = false;
    this.isRefreshing = false;
  }

  async updateAccessToken() {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      try {
        const response = await getAccessToken();
        this.setAccessToken(response.payload.access_token);
        this.alertShown = false;
      } catch (error) {
        if (!this.alertShown) {
          window.alert('로그인이 필요합니다.');
          this.alertShown = true;
          this.removeData();
          window.location.href = '/auth';
        }
      } finally {
        this.isRefreshing = false;
      }
    }
  }

  setAccessToken(token: string) {
    // 1시간
    const expires = new Date(Date.now() + 60 * 60 * 1000);
    this.cookies.set('selpiece-access-token', token, {
      path: '/',
      expires,
    });
  }

  setRegisterToken(token: string) {
    // 1시간
    const expires = new Date(Date.now() + 60 * 60 * 1000);
    this.cookies.set('selpiece-register-token', token, {
      path: '/',
      expires,
    });
  }

  getAccessToken() {
    return this.cookies.get('selpiece-access-token');
  }

  getRegisterToken() {
    return this.cookies.get('selpiece-register-token');
  }

  removeRegisterToken() {
    this.cookies.remove('selpiece-register-token');
  }

  getHeader() {
    if (userService.getUserState() === 'PRE_MEMBER') {
      if (!this.getRegisterToken()) {
        window.alert('로그인이 필요합니다.');
        this.removeData();
        window.location.href = '/auth';
      }

      return `Bearer ${this.getRegisterToken()}`;
    }

    if (userService.getUserState() === 'MEMBER') {
      return `Bearer ${this.getAccessToken()}`;
    }
  }

  removeData() {
    this.cookies.remove('selpiece-access-token');
    this.cookies.remove('selpiece-register-token');
    userService.removeUser();
  }

  onLogout = () => {
    this.removeData();
    window.location.href = '/';
  };
}

export const tokenService = new TokenService();
