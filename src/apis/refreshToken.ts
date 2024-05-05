import { useCookies } from 'react-cookie';

import Axios from './axios';

interface Cookie {
  accessToken?: string;
  refreshToken?: string;
}

export const useRefreshTokens = () => {
  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken']);

  const tokenExpire = (token: string | undefined): boolean => {
    if (!token) return true;
    const tokenExp = 360000;
    const currentTime = Date.now();
    return tokenExp < currentTime;
  };

  const refreshToken = async () => {
    try {
      const refreshToken = cookies.refreshToken;
      if (tokenExpire(refreshToken)) {
        window.location.href = '/login';
        return;
      }

      const response = await Axios.post('/api/v1/reissue/access-token', {
        refreshToken,
      });
      setCookie('accessToken', response.data.accessToken, { path: '/' });
    } catch (error) {
      console.error(error);
      window.location.href = '/login';
    }
  };

  return {
    getCookie: (name: keyof Cookie) => cookies[name],
    refreshToken,
  };
};
