import React from 'react';

import styled from 'styled-components';

import GoogleLoginButton from '@/components/Button/GoogleButton';
import KakaoLoginButton from '@/components/Button/KakaoButton';
import NaverLoginButton from '@/components/Button/NaverButton';

import backgroundimg from '../assets/bg.svg';
//import { ReactComponent as GoogleIcon } from '../assets/icons/googleIcon.svg';
//import { ReactComponent as KakaoIcon } from '../assets/icons/kakaoIcon.svg';
//import { ReactComponent as Navericon } from '../assets/icons/naverIcon.svg';

export const FirstView = () => {
  return (
    <ViewContainer>
      <MainContainer>
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

        <ButtonContainer>
          <NaverLoginButton />
          <KakaoLoginButton />
          <GoogleLoginButton />
        </ButtonContainer>
      </MainContainer>
    </ViewContainer>
  );
};

export default FirstView;

export const ViewContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundimg});
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  //z-index: -1;
`;

export const MainContainer = styled.div`
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 460px;
`;

export const TextContainer = styled.div`
  margin-bottom: 72px;
  .content {
    align-self: stretch;
    height: 148px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;

    span {
      color: ${(props) => props.theme.color.gray800};
      text-align: center;
      font-size: 40px;
      font-weight: 700;
      line-height: 50px;

      .highlight {
        color: ${(props) => props.theme.color.primary500};
      }
    }
    p {
      color: ${(props) => props.theme.color.gray600};
      font-size: 25px;
      font-weight: 500;
      line-height: 32px;
    }
  }
`;

export const ButtonContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
