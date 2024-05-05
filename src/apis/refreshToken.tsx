import { useCookies } from 'react-cookie';

import { Axios } from './axios';

interface Cookie {
  accessToken?: string;
  refreshToken?: string;
}

export const useRefreshTokens = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken']);

  const refreshToken = async () => {
    try {
      const response = await Axios.post('/api/v1/reissue/access-token', {
        refreshToken: cookies.refreshToken,
      });
      setCookie('accessToken', response.data.accessToken, { path: '/' });
    } catch (error) {
      console.error(error);
      removeCookie('accessToken');
      removeCookie('refreshToken');
      window.location.href = '/login';
    }
  };

  return {
    getCookie: (name: keyof Cookie) => cookies[name],
    refreshToken,
  };
};
