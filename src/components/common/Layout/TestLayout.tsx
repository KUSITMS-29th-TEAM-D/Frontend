import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { TestNavigation } from '@/components/common/Navigation/TestNavigation';

export const TestLayout = () => {
  return (
    <StyledContainer>
      <TestNavigation />
      <Outlet />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  zoom: 1.25;
`;
