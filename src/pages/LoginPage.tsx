import { useState, useEffect } from 'react';

import { TopNavigation } from '@/components/common/TopNavigation';

import { LoginDesktopPage } from '../components/LoginPage/LoginDesktopPage';
import { LoginMobilePage } from '../components/LoginPage/LoginMobilePage';

export const LoginPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <TopNavigation />
      {isMobile ? <LoginMobilePage /> : <LoginDesktopPage />}
    </div>
  );
};
