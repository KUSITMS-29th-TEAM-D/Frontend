import { styled } from 'styled-components';

import Card from '@/components/MyPage/Card';

export const PersonaView = () => {
  return (
    <>
      <StyledContainer>
        <StyledInnerContainer>
          <StyledTopContainer>
            <TopContainer></TopContainer>
            <BottomContainer>
              <BottomTitleContainer>Discover 나를 깊게 이해해요</BottomTitleContainer>
              <BottomCardContainer>
                <Card />
                <Card />
                <Card />
              </BottomCardContainer>
              <BottomImageContainer></BottomImageContainer>
            </BottomContainer>
          </StyledTopContainer>
        </StyledInnerContainer>
      </StyledContainer>
    </>
  );
};
const StyledContainer = styled.div`
  padding-top: 81px;
`;
const StyledInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
`;

const StyledTopContainer = styled.div`
  align-self: stretch;
  height: 1381px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 48px;
  display: flex;
`;

const TopContainer = styled.div`
  align-self: stretch;
  height: 706px;
  padding: 24px;
  background-color: ${({ theme }) => `${theme.color.primary50}`};
  border-radius: 16px;
  overflow: hidden;
  border: 2px #ddccfe solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
`;

const BottomContainer = styled.div`
  align-self: stretch;
  height: 627px;
  padding: 24px;
  background-color: ${({ theme }) => `${theme.color.gray150}`};
  border-radius: 16px;
  overflow: hidden;
  border: 2px #dfdfdf solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: flex;
`;

const BottomTitleContainer = styled.div`
  align-self: stretch;
  height: 28px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const BottomCardContainer = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: inline-flex;
`;

const BottomImageContainer = styled.div`
  width: 988px;
  height: 391px;
  position: relative;
  background: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.13);
  border-radius: 16px;
  overflow: hidden;
`;
