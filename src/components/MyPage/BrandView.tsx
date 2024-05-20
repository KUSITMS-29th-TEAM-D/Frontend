import { styled } from 'styled-components';

import { ReactComponent as ArrowRight } from '@/assets/icons/arrowRight.svg';
import { ReactComponent as BrandLogoImage } from '@/assets/logos/brandLogo.svg';
import ExampleComponent2 from '@/components/MyPage/Card2';
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
        <LeftContent></LeftContent>
        <CenterContent></CenterContent>
        <RightContent></RightContent>
      </ContentContainer>
      <ExampleComponent2 />
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
  height: 996px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const LeftContent = styled.div`
  align-self: stretch;
  justify-content: space-between;
  align-items: flex-end;
  display: inline-flex;
`;

const CenterContent = styled.div`
  align-self: stretch;
  height: 208px;
  padding: 24px;
  background: #f7f7f7;
  border-radius: 16px;
  border: 2px #efefef solid;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const RightContent = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  display: inline-flex;
`;
