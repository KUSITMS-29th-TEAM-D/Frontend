/* import { useNavigate } from 'react-router-dom'; */
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NAVIGATE_TEXT = {
  discover: 'Discover 이해하기',
  define: 'Define 정의하기',
  design: 'Design 설계하기',
};

export const TestNavigation = () => {
  //const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    // TODO: 홈페이지로 이동하도록 변경하기
    window.location.href = 'https://selpiece.framer.website';
  };

  let titleText = '';
  if (location.pathname.includes('discover')) {
    titleText = NAVIGATE_TEXT.discover;
  } else if (location.pathname.includes('define')) {
    titleText = NAVIGATE_TEXT.define;
  } else if (location.pathname.includes('design')) {
    titleText = NAVIGATE_TEXT.design;
  }

  return (
    <StyledContainer>
      <Container>
        <Title>{titleText}</Title>
        <StyledButton onClick={handleButtonClick}>종료하기</StyledButton>
      </Container>
    </StyledContainer>
  );
};

const StyledContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 76px;
  padding: 0 64px;

  background: ${({ theme }) => theme.color.white};

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 20px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.color.gray700};
  ${({ theme }) => theme.font.desktop.body1b};

  @media ${({ theme }) => theme.device.tablet} {
    ${({ theme }) => theme.font.mobile.body1b};
  }
  @media ${({ theme }) => theme.device.mobile} {
    ${({ theme }) => theme.font.mobile.body1b};
  }
  word-wrap: break-word;
`;

const StyledButton = styled.button`
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.color.primary50};
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.color.primary700};
  ${({ theme }) => theme.font.desktop.label1m};

  @media ${({ theme }) => theme.device.tablet} {
    ${({ theme }) => theme.font.mobile.body1b};
  }
  @media ${({ theme }) => theme.device.mobile} {
    ${({ theme }) => theme.font.mobile.body1b};
  }
`;
