import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const StyledContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  padding: 20px 42px;
  background: ${({ theme }) => theme.color.white};
  backdrop-filter: blur(5px);

  @media ${({ theme }) => theme.device.mobile} {
    padding: 16px 8px 16px 24px;
    background: ${({ theme }) => theme.color.white};
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 44px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 4px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 4px;
  }
  background: ${({ theme }) => theme.color.white};
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

const TestTitle = styled.div`
  border-radius: 8px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
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

const ButtonContainer = styled.button`
  padding: 8px 24px;
  background-color: ${({ theme }) => theme.color.primary50};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
`;

const ButtonText = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.color.primary700};
  ${({ theme }) => theme.font.desktop.label1m};

  @media ${({ theme }) => theme.device.tablet} {
    ${({ theme }) => theme.font.mobile.body1b};
  }
  @media ${({ theme }) => theme.device.mobile} {
    ${({ theme }) => theme.font.mobile.body1b};
  }
  word-wrap: break-word;
`;

const TestNavigation = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };
  return (
    <StyledContainer>
      <Container>
        <TestTitle>
          <Title>Define 정의하기</Title>
        </TestTitle>
        <ButtonContainer onClick={handleButtonClick}>
          <ButtonText>종료하기</ButtonText>
        </ButtonContainer>
      </Container>
    </StyledContainer>
  );
};

export default TestNavigation;
