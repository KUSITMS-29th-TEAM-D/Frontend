import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import backgroundImg from '@/assets/backgrounds/discoverBackground.png';
import { PlainButton } from '@/components/common/Button/PlainButton';

export const DiscoverStartPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/test/discover');
  };
  return (
    <div>
      <ViewContainer>
        <Styled1Container>
          <TopContainer>
            <TitleTextContainer>
              <TitleContainer>
                <br />
                당신은 어떤 사람이었나요?
              </TitleContainer>
              <SubTitleContainer>
                나에 대한 이해는 과거 나의 경험을 돌아보는 것으로부터 시작됩니다.
                <br />
                <span className="highlight">건강, 커리어, 사랑, 여가</span> 측면에서의 당신의 경험을
                살펴봅니다.과거 나의 모습을 통해 분석 보고서를 받아 보세요
              </SubTitleContainer>
            </TitleTextContainer>
            <PlainButton variant="gray" width="376px" height="48px" onClick={handleClick}>
              시작하기
            </PlainButton>
          </TopContainer>
        </Styled1Container>
      </ViewContainer>
    </div>
  );
};

const TitleTextContainer = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const TitleContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => `${theme.color.gray900}`};
  ${({ theme }) => theme.font.desktop.h2};
`;

const SubTitleContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.body1m};
  word-wrap: break-word;

  .highlight {
    color: ${({ theme }) => `${theme.color.primary700}`};
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 48px;
  display: flex;
`;

const Styled1Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 64px;
  padding-top: 118px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
`;

export const ViewContainer = styled.div`
  height: 100vh;

  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: right;
  display: flex;
  overflow-x: auto;
`;
