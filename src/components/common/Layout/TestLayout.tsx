import { Outlet } from 'react-router-dom';

import { TestNavigation } from '@/components/common/Navigation/TestNavigation';

export const TestLayout = () => {
  return (
    <>
      <TestNavigation />
      <Outlet />
    </>
  );
};
