import { useCookies } from 'react-cookie';

import Axios from '@/apis/axios';

export const useRefreshTokens = () => {
  const [cookies, setCookie] = useCookies(['accessToken']);

  const getAcessToken = async () => {
    try {
      const accessToken = cookies.accessToken;
      if (accessToken) {
        return;
      }
      const response = await Axios.post('/api/v1/reissue/access-token');
      const expireTime = new Date(Date.now() + import.meta.env.VITE_ACCESS_TOKEN_EXPIRATION_TIME);
      setCookie('accessToken', response.data.accessToken, { path: '/', expires: expireTime });
    } catch (error) {
      console.error(error);
      window.location.href = '/login';
    }
  };

  return {
    getAcessToken,
  };
};
