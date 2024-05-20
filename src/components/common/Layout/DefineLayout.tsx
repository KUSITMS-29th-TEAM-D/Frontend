import { Outlet } from 'react-router-dom';

import DefineHeaderNavigation from '@/components/common/Navigation/DefineHeaderNavigation';

export const DefineLayout = () => {
  return (
    <>
      <DefineHeaderNavigation />
      <Outlet />
    </>
  );
};
