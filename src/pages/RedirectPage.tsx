import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { authService } from '@/services/AuthService';
import { userService } from '@/services/UserService';

export const RedirectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const nickname = params.get('nickname');
    const accessToken = params.get('access_token');
    const registerToken = params.get('register_token');

    if (registerToken) {
      authService.onLoginSuccess(registerToken);
      userService.setUser({ nickname: '' });
      navigate('/'); // TODO: 온보딩 화면으로 이동하도록 수정
    }

    if (accessToken) {
      authService.onLoginSuccess(accessToken);
      nickname && userService.setUser({ nickname });
      navigate('/');
    }
    // TODO: warning 해결
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
