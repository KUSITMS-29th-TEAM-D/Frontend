import { useEffect, useState } from 'react';

import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useLocation } from 'react-router-dom';

const LoginToken = () => {
  const location = useLocation();
  const [, setCookie] = useCookies(['accessToken']);
  const [isTokenRefresh, setTokenRefresh] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('accessToken');

    if (accessToken) {
      setCookie('accessToken', accessToken, { path: '/', maxAge: 3600000 });
      const tokenPayload = parseTokenPayload(accessToken);
      const tokenExpireTime = tokenPayload.exp * 1000; //시간은 나중에 재설정

      const currentTime = Date.now();
      const refreshTime = 300000; //마찬가지로 나중에 재설정
      const expireTime = tokenExpireTime - currentTime;

      if (expireTime < refreshTime) {
        refreshAccessToken();
      }
    }
  }, [location.search, setCookie]);

  const parseTokenPayload = (token: string) => {
    const payloadBase64 = token.split('.')[1];
    const payload = JSON.parse(atob(payloadBase64));
    return payload;
  };

  const refreshAccessToken = async () => {
    if (!isTokenRefresh) {
      setTokenRefresh(true);
      try {
        const response = await axios.post('/api/v1/reissue/access-token');
        if (response.status === 200) {
          const newAccessToken = response.data.accessToken;
          setCookie('accessToken', newAccessToken, { path: '/', maxAge: 3600000 });
        } else {
          console.error('error1');
        }
      } catch (error) {
        console.error('error2', error);
      } finally {
        setTokenRefresh(false);
      }
    }
  };

  return null;
};

export default LoginToken;
