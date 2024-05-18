import { Outlet } from 'react-router-dom';

import DesignHeaderNavigation from '@/components/common/Navigation/DesignHeaderNavigation';

export const DesignLayout = () => {
  return (
    <>
      <DesignHeaderNavigation />
      <Outlet />
    </>
  );
};
