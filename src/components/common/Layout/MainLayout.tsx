import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from '@/components/common/Footer';
import { TopNavigation } from '@/components/common/Navigation/TopNavigation';

const FOOTER_VISIBLE_PATHS = ['/', '/understand', '/program'];

export const MainLayout = () => {
  const location = useLocation();
  return (
    <div style={{ minWidth: 'max-content' }}>
      <TopNavigation />
      <Outlet />
      {FOOTER_VISIBLE_PATHS.includes(location.pathname) && <Footer />}
    </div>
  );
};
