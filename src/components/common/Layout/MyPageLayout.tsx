import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { MypageSidebar } from '@/components/MyPage/MyPageSidebar';

export const MyPageLayout = () => {
  return (
    <StyledContainer>
      <MypageSidebar />
      <StyledOutletContainer>
        <Outlet />
      </StyledOutletContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  min-height: var(--full-height);
  width: 100%;
`;

const StyledOutletContainer = styled.div`
  width: calc(var(--full-width) - 196px);
`;
