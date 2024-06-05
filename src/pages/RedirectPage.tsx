import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { tokenService } from '@/services/TokenService';
import { userService } from '@/services/UserService';

export const RedirectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const nickname = params.get('nickname');
    const isTest = params.get('is_test');
    const accessToken = params.get('access_token');
    const registerToken = params.get('register_token');

    sessionStorage.clear();

    if (registerToken) {
      tokenService.setRegisterToken(registerToken);
      userService.setUser({ nickname: '', is_test: false });
      navigate('/onboarding');
    }

    if (accessToken) {
      tokenService.setAccessToken(accessToken);
      nickname && userService.setUser({ nickname, is_test: isTest === 'T' ? true : false });
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
