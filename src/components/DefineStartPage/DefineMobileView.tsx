import { styled } from 'styled-components';

import backgroundImg from '@/assets/backgrounds/defineBackground.png';
import { PlainButton } from '@/components/common/Button/PlainButton';

export const DefineMobileView = ({ onNext }: { onNext: () => void }) => {
  return (
    <ViewContainer>
      <StyledContainer>
        <TopContainer>
          <TitleTextContainer>
            <TitleContainer>현재 당신은 어떤 사람인가요?</TitleContainer>
            <SubTitleContainer>
              문항은 <span className="highlight">총 3문항</span>으로,
              <br /> 홀랜드 검사 이론을 기반으로 구성되어 있어요.
              <br />
              정의하기 테스트를 통해 나의 조각 유형을 도출하고,{' '}
              <span className="highlight">결과 카드</span>를 받아보세요!
            </SubTitleContainer>
          </TitleTextContainer>
          <BottomContainer>
            <SubTextContainer>
              <span className="highlight">홀랜드 검사란,</span>
              <br />
              성격 유형과 커리어의 특성을 6개의 유형으로 분류하여 육각형으로 보여주는 검사로,
              셀피스의 정의하기 테스트는 해당 이론에서 착안하여 고안되었습니다.
            </SubTextContainer>
            <PlainButton variant="gray" width="100%" height="48px" onClick={onNext}>
              테스트 시작하기
            </PlainButton>
          </BottomContainer>
        </TopContainer>
      </StyledContainer>
    </ViewContainer>
  );
};

const TitleTextContainer = styled.div`
  align-self: stretch;
  height: 132px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    height: 152px;
  }
`;

const TitleContainer = styled.div`
  align-self: stretch;
  color: ${({ theme }) => `${theme.color.gray900}`};
  ${({ theme }) => theme.font.mobile.title1};
`;

const SubTitleContainer = styled.div`
  align-self: stretch;
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.mobile.body2m};
  word-wrap: break-word;

  .highlight {
    color: ${({ theme }) => `${theme.color.primary700}`};
  }
`;

const TopContainer = styled.div`
  align-self: stretch;
  flex: 1 1 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
`;
const BottomContainer = styled.div`
  align-self: stretch;
  height: 120px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    height: 140px;
  }
`;
const SubTextContainer = styled.div`
  align-self: stretch;
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.mobile.body2m};
  word-wrap: break-word;

  .highlight {
    color: ${({ theme }) => `${theme.color.primary600}`};
  }
  @media ${({ theme }) => theme.device.mobile} {
    ${({ theme }) => theme.font.mobile.label2};
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  padding-top: 100px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 20px;
    padding-top: 96px;
  }
`;

const ViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;

  //zoom: 1.25;
`;
