import React from 'react';

import styled from 'styled-components';

import GoogleLoginButton from '@/components/Button/GoogleButton';
import KakaoLoginButton from '@/components/Button/KakaoButton';
import NaverLoginButton from '@/components/Button/NaverButton';

import SIcon from '../assets/3d.svg';
import backgroundimg from '../assets/bg.svg';

export const MobileView = () => (
  <ViewContainer>
    <MainContainer>
      <InnerContainer>
        <TextContainer>
          <div className="content">
            <div>
              <span>
                <span className="highlight">셀피스</span>로 나의 새로운 <br />
                경험 조각을 찾아보세요!
              </span>
              <p>3초면 회원가입이 가능해요</p>
            </div>
          </div>
        </TextContainer>
      </InnerContainer>
      <IconContainer>
        <StyledIcon src={SIcon} alt="3D Icon" />
      </IconContainer>
      <ButtonContainer>
        <NaverLoginButton />
        <KakaoLoginButton />
        <GoogleLoginButton />
      </ButtonContainer>
    </MainContainer>
  </ViewContainer>
);

const ViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundimg});
  background-size: cover;
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
`;

const MainContainer = styled.div`
  width: 100%;
  padding: 45px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 46px;
  display: flex;
`;

const InnerContainer = styled.div`
  align-self: stretch;
  height: fit-content;
  min-height: 100%;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
  overflow: auto;
  text-align: center;
`;

const TextContainer = styled.div`
  margin-top: 69px;
  .content {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    display: flex;
    text-align: center;

    span {
      color: ${(props) => props.theme.color.gray800};
      text-align: center;
      font-size: 28px;
      font-weight: 500;
      line-height: 32px;

      .highlight {
        color: ${(props) => props.theme.color.primary500};
      }
    }
    p {
      color: ${(props) => props.theme.color.gray600};
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      margin-top: 10px;
      text-align: center;
    }
  }
`;
const StyledIcon = styled.img`
  width: 100%;
  height: 100%;
  transform: rotate(-15deg);
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 380px;
  overflow: hidden;
  //background-color: rgba(255, 0, 0, 0.5);
`;

const ButtonContainer = styled.div`
  align-self: stretch;
  height: 168px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  display: flex;
`;
