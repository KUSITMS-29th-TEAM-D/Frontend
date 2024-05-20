import { styled } from 'styled-components';

import { ReactComponent as ArrowRight } from '@/assets/icons/arrowRight.svg';
import { ReactComponent as BrandLogoImage } from '@/assets/logos/brandLogo.svg';
import Card from '@/components/MyPage/Card';
import { PlainChip } from '@/components/common/Chip/PlainChip';

export const BrandView = () => {
  return (
    <StyledContainer>
      <BrandHeader>
        <HeaderLeft>
          <BrandLogo>
            <BrandLogoImage />
          </BrandLogo>
          <BrandTitle>브랜드 이름</BrandTitle>
          <BrandSubtitle>상반기 100만 구독자 확보</BrandSubtitle>
        </HeaderLeft>
        <HeaderRight>
          <RightText>더보기</RightText>
          <RightIcon>
            <ArrowRight />
          </RightIcon>
        </HeaderRight>
      </BrandHeader>
      <ContentContainer>
        <TopContent>
          <BrandTextContainer>
            <BrandText>브랜드 관리</BrandText>
          </BrandTextContainer>
          <BrandMenuContainer></BrandMenuContainer>
        </TopContent>
        <CenterContent>
          <RecommendContainer>
            <RecommendText>Ai 추천</RecommendText>
          </RecommendContainer>
          <RecommendCardContainer>
            <Card />
            <Card />
            <Card />
            <Card />
          </RecommendCardContainer>
        </CenterContent>
        <BottomContent>
          <BottomContainer>
            <CardHeader>
              <PlainChip>준비</PlainChip>
            </CardHeader>
            <Card />
          </BottomContainer>
          <BottomContainer>
            <CardHeader>
              <PlainChip>진행</PlainChip>
            </CardHeader>
            <Card />
            <Card />
            <Card />
            <Card />
          </BottomContainer>
          <BottomContainer>
            <CardHeader>
              <PlainChip>완료</PlainChip>
            </CardHeader>
            <Card /> <Card /> <Card /> <Card />
          </BottomContainer>
        </BottomContent>
      </ContentContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 24px 52px 24px;
`;

const BrandHeader = styled.div`
  width: 100%;
  height: 101px;
  padding: 24px;
  background-color: ${({ theme }) => `${theme.color.primary50}`};
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;
const HeaderLeft = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
`;

const BrandLogo = styled.div`
  width: 52px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

const BrandTitle = styled.div`
  color: ${({ theme }) => `${theme.color.gray900}`};
  ${({ theme }) => theme.font.desktop.body1b};
`;

const BrandSubtitle = styled.div`
  color: ${({ theme }) => `${theme.color.primary500}`};
  ${({ theme }) => theme.font.desktop.body1m};
`;

const HeaderRight = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  display: flex;
`;

const RightText = styled.div`
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.body1m};
`;

const RightIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
`;

const ContentContainer = styled.div`
  align-self: stretch;
  //height: 996px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const TopContent = styled.div`
  align-self: stretch;
  justify-content: space-between;
  align-items: flex-end;
  display: inline-flex;
`;
const BrandTextContainer = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: flex;
`;
const BrandText = styled.div`
  text-align: center;
  color: ${({ theme }) => `${theme.color.gray800}`};
  ${({ theme }) => theme.font.desktop.title2};
  word-wrap: break-word;
`;
const BrandMenuContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border: 2px #efefef solid;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;
const CenterContent = styled.div`
  align-self: stretch;
  height: 208px;
  padding: 24px;
  background: ${({ theme }) => `${theme.color.gray100}`};
  border-radius: 16px;
  border: 2px #efefef solid;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const RecommendContainer = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 16px;
  display: inline-flex;
`;
const RecommendText = styled.div`
  color: ${({ theme }) => `${theme.color.primary600}`};
  ${({ theme }) => theme.font.desktop.body1b};
  word-wrap: break-word;
`;
const RecommendCardContainer = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  display: inline-flex;
`;
const BottomContent = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: inline-flex;
`;

const BottomContainer = styled.div`
  flex: 1 1 0;
  padding: 16px;
  background: ${({ theme }) => `${theme.color.gray100}`};
  border-radius: 16px;
  border: 2px #efefef solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: inline-flex;
`;

const CardHeader = styled.div`
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;
