import axios from 'axios';
import { Cookies } from 'react-cookie';

import { getAccessToken } from '@/apis/tokenAPI/getAccessToken';
import { userService } from '@/services/UserService';

class TokenService {
  cookies = new Cookies();

  async updateAccessToken() {
    try {
      const response = await getAccessToken();
      this.setAccessToken(response.payload.access_token);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401) {
          window.alert('로그인이 필요합니다.');
          this.onLogout();
        } else {
          window.alert('알 수 없는 오류가 발생했습니다.');
        }
      }
    }
  }

  setAccessToken(token: string) {
    // TODO: 만료일자 수정
    const expires = new Date(Date.now() + 60 * 60 * 24 * 7 * 1000);
    this.cookies.set('selpiece-access-token', token, {
      path: '/',
      expires,
    });
  }

  setRegisterToken(token: string) {
    // TODO: 만료일자 수정
    const expires = new Date(Date.now() + 60 * 60 * 24 * 7 * 1000);
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

  getHeader() {
    if (userService.getUserState() === 'PRE_MEMBER') {
      if (!this.getRegisterToken()) {
        window.alert('로그인이 필요합니다.');
        this.onLogout();
      }

      return `Bearer ${this.getRegisterToken()}`;
    }

    if (userService.getUserState() === 'MEMBER') {
      return `Bearer ${this.getAccessToken()}`;
    }
  }

  onLogout = () => {
    this.cookies.remove('selpiece-access-token');
    this.cookies.remove('selpiece-register-token');
    userService.removeUser();
    window.location.href = '/auth';
  };
}

export const tokenService = new TokenService();
