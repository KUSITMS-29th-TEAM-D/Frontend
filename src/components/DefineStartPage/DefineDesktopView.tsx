import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import backgroundImg from '@/assets/backgrounds/defineBackground.png';
import { PlainButton } from '@/components/common/Button/PlainButton';

export const DefineDesktopView = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/test/define/1');
  };
  return (
    <div>
      <ViewContainer>
        <Styled1Container>
          <TopContainer>
            <TitleTextContainer>
              <TitleContainer>
                <br />
                현재 당신은 어떤 사람인가요?
              </TitleContainer>
              <SubTitleContainer>
                문항은 <span className="highlight">총 3문항</span>으로, 홀랜드 검사 이론을 기반으로
                구성되어 있어요.
                <br />
                정의하기 테스트를 통해 나의 조각 유형을 도출하고,
                <span className="highlight">결과 카드</span>를 받아보세요!
              </SubTitleContainer>
            </TitleTextContainer>
            <PlainButton variant="gray" width="376px" height="48px" onClick={handleClick}>
              테스트 시작하기
            </PlainButton>
          </TopContainer>

          <Styled2Container>
            <SubTextContainer>
              <span className="highlight">홀랜드 검사란,</span>
              <br />
              성격 유형과 커리어의 특성을 6개의 유형으로 분류하여 육각형으로 보여주는 검사로,
              <br />
              셀피스의 정의하기 테스트는 해당 이론에서 착안하여 고안되었습니다.
            </SubTextContainer>
          </Styled2Container>
        </Styled1Container>
      </ViewContainer>
    </div>
  );
};

const TitleTextContainer = styled.div`
  align-self: stretch;
  //height: 172px;
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
  width: 1152px;
  height: 544px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 48px;
  display: flex;
`;

const SubTextContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.label2};
  word-wrap: break-word;

  .highlight {
    color: ${({ theme }) => `${theme.color.primary600}`};
  }
`;

const Styled1Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 64px;
  padding-top: 118px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
`;
const Styled2Container = styled.div`
  align-self: stretch;
`;

export const ViewContainer = styled.div`
  height: 100vh;

  background-image: url(${backgroundImg});
  background-size: cover;
  display: flex;
  overflow-x: auto;
`;
