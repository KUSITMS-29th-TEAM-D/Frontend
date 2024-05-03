import { Outlet } from 'react-router-dom';

import { TopNavigation } from '@/components/common/Navigation/TopNavigation';

export const MainLayout = () => {
  return (
    <>
      <TopNavigation />
      <Outlet />
    </>
  );
};
