import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import backgroundImg from '@/assets/backgrounds/designStartBackground.png';
import { PlainButton } from '@/components/common/Button/PlainButton';

export const DesignStartView = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/test/design/2');
  };
  return (
    <div>
      <ViewContainer>
        <Styled1Container>
          <TopContainer>
            <TitleTextContainer>
              <TitleContainer>
                <br />
                어떤 브랜더가 되고 싶나요?
              </TitleContainer>
              <SubTitleContainer>
                문항은 <span className="highlight">총 5문항</span>으로, 앞으로 만들어 갈 나의 브랜드
                방향성을 설정하는 첫 걸음이에요.
                <br />
                설계하기 테스트를 통해 나의 브랜드 컨셉을 정해보고,{' '}
                <span className="highlight">브랜딩을 시작해보세요!</span>
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
  //height: var(--full-height);
  height: 100vh;

  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: right;
  display: flex;
  overflow-x: auto;
`;
