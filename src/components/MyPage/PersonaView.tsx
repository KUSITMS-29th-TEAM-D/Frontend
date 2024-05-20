import Slider from 'react-slick';
import { styled } from 'styled-components';

import DiscoverImage from '@/assets/myPage/MypageDiscover.png';
import Card from '@/components/MyPage/Card';

export const PersonaView = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <StyledContainer>
      <StyledInnerContainer>
        <StyledTopContainer>
          <TopContainer></TopContainer>
          <BottomContainer>
            <BottomTitleContainer>
              <BottomTitle>
                <Highlight>Discover </Highlight>나를 깊게 이해해요
              </BottomTitle>
            </BottomTitleContainer>
            <BottomCardContainer>
              <StyledSlider {...settings}>
                <CardWrapper>
                  <Card />
                </CardWrapper>
                <CardWrapper>
                  <Card />
                </CardWrapper>
                <CardWrapper>
                  <Card />
                </CardWrapper>
                <CardWrapper>
                  <Card />
                </CardWrapper>
                <CardWrapper>
                  <Card />
                </CardWrapper>
                <CardWrapper>
                  <Card />
                </CardWrapper>
              </StyledSlider>
            </BottomCardContainer>
            <BottomImageContainer>
              <img
                src={DiscoverImage}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </BottomImageContainer>
          </BottomContainer>
        </StyledTopContainer>
      </StyledInnerContainer>
    </StyledContainer>
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

const BottomTitle = styled.div`
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.body1b};
  word-wrap: break-word;
`;

const Highlight = styled.span`
  color: ${({ theme }) => `${theme.color.primary600}`};
`;

const BottomCardContainer = styled.div`
  width: 100%;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    padding: 0 20px;
  }
  .slick-track {
    display: flex;
    gap: 20px;
  }
`;

const CardWrapper = styled.div`
  flex: 0 0 300px;
  box-sizing: border-box;
`;

const BottomImageContainer = styled.div`
  width: 988px;
  height: 393px;
  position: relative;
  display: flex;
`;
