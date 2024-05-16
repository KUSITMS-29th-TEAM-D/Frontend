import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { LoginDesktopPage } from '@/components/LoginPage/LoginDesktopPage';
import { LoginMobilePage } from '@/components/LoginPage/LoginMobilePage';
import { userService } from '@/services/UserService';

export const LoginPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const user = userService.getUserState();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1279);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    if (user !== 'NON_MEMBER') {
      navigate('/');
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{isMobile ? <LoginMobilePage /> : <LoginDesktopPage />}</>;
};
