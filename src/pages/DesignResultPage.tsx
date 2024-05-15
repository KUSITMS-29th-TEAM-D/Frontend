import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BackgroundImg from '@/assets/backgrounds/designResultBackground.png';
import { PlainButton } from '@/components/common/Button/PlainButton';

const Dummy = {
  name: '민선',
  brand: '학교 생활 열심히 하며\n수익도 내는 20대 갓생 유튜버',
};

export const DesignResultPage = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledInnerContainer>
        <StyledContent>
          <div className="title">
            <span className="highlight">{Dummy.name}</span>님은 이런 브랜드가 되고 싶군요!
          </div>
          <div className="brand">“{Dummy.brand}”</div>
          <PlainButton
            variant="gray"
            width="100%"
            height="48px"
            onClick={() => navigate('/test/design/1')}
          >
            다시 설정하기
          </PlainButton>
        </StyledContent>
      </StyledInnerContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  min-height: 100vh;

  background-image: url(${BackgroundImg});
  background-size: cover;
`;

const StyledInnerContainer = styled.div`
  min-height: 100vh;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  width: 933px;

  .title {
    ${({ theme }) => theme.font.desktop.title2};
    color: ${({ theme }) => theme.color.gray700};

    .highlight {
      color: ${({ theme }) => theme.color.primary500};
    }
  }

  .brand {
    ${({ theme }) => theme.font.desktop.h2};
    color: ${({ theme }) => theme.color.primary600};
    white-space: pre-line;
    text-align: center;
    margin-bottom: 32px;
  }
`;
