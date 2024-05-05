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
      setCookie('access_token', accessToken, { expires: new Date(Date.now() + 360000) });
      window.location.href = '/';
    }
  }, [location.search, setCookie, cookies]);

  return null;
};

export default RedirectPage;
