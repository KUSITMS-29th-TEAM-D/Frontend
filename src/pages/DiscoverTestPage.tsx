import styled from 'styled-components';

import { ChattingBox } from '@/components/DiscoverTestPage/ChattingBox';
import { RightSidebar } from '@/components/DiscoverTestPage/RightSidebar';

export const DiscoverTestPage = () => {
  return (
    <>
      <StyledContainer>
        <StyledInnerContainer>
          <ChattingBox />
          <RightSidebar />
        </StyledInnerContainer>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  min-width: max-content;
  height: 100vh;
  padding: 76px 64px 24px 64px;
  overflow: hidden;
`;

const StyledInnerContainer = styled.div`
  width: fit-content;
  height: 100%;

  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: center;
  gap: 20px;
`;
