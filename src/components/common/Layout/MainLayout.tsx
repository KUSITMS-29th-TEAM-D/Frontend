import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Footer } from '@/components/common/Footer';
import { TopNavigation } from '@/components/common/Navigation/TopNavigation';

export const MainLayout = () => {
  return (
    <>
      <TopNavigation />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      {/* TODO: 홈 / 진단홈 / 경험홈 / 마이페이지홈에서만 Footer가 보이도록 수정 */}
      {true && <Footer />}
    </>
  );
};

const OutletContainer = styled.div`
  min-width: 1280px;
`;
