import { useState, useEffect } from 'react';

import { LoginDesktopPage } from '@/components/LoginPage/LoginDesktopPage';
import { LoginMobilePage } from '@/components/LoginPage/LoginMobilePage';

export const LoginPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1279);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{isMobile ? <LoginMobilePage /> : <LoginDesktopPage />}</>;
};
