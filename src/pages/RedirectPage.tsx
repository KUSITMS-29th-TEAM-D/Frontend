import { useEffect } from 'react';

import { useCookies } from 'react-cookie';
import { useLocation } from 'react-router-dom';

const RedirectPage = () => {
  const location = useLocation();
  const [cookies, setCookie] = useCookies(['access_token']);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('access_token');

    if (accessToken) {
      const expireTime = new Date(Date.now() + import.meta.env.VITE_ACCESS_TOKEN_EXPIRATION_TIME);
      setCookie('access_token', accessToken, { expires: expireTime });
      window.location.href = '/';
    }
  }, [location.search, setCookie, cookies]);

  return null;
};

export default RedirectPage;
