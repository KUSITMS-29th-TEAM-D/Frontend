import { useEffect } from 'react';

import { useCookies } from 'react-cookie';
import { useLocation } from 'react-router-dom';

const RedirectPage = () => {
  const location = useLocation();
  const [cookies, setCookie] = useCookies(['accessToken']);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('accessToken');

    if (accessToken) {
      setCookie('accessToken', accessToken);
      window.location.href = '/';
    }
  }, [location.search, setCookie, cookies]);

  return null;
};

export default RedirectPage;
