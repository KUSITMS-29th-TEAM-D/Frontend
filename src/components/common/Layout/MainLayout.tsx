import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { TopNavigation } from '@/components/common/Navigation/TopNavigation';

export const MainLayout = () => {
  return (
    <>
      <TopNavigation />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  );
};

const OutletContainer = styled.div`
  min-width: 1280px;
`;
