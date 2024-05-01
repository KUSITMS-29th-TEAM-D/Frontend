import React from 'react';

import styled from 'styled-components';

import GoogleLoginButton from '@/components/Button/GoogleButton';
import KakaoLoginButton from '@/components/Button/KakaoButton';
import NaverLoginButton from '@/components/Button/NaverButton';

import { ReactComponent as SIcon } from '../assets/3d.svg';
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

        <IconContainer
          style={{
            width: '100px',
            height: '100px',
            transform: 'rotate(15deg)',
            transformOrigin: '0 0',
          }}
        >
          <SIcon />
        </IconContainer>
      </InnerContainer>

      <ButtonContainer>
        <NaverLoginButton />
        <KakaoLoginButton />
        <GoogleLoginButton />
      </ButtonContainer>
    </MainContainer>
  </ViewContainer>
);
export const ViewContainer = styled.div`
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
  min-height: 0;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
  overflow: auto;
`;

const TextContainer = styled.div`
  .content {
    align-self: stretch;
    height: 96px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    display: flex;
    margin-bottom: 92px;

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
      margin-top: 20px;
    }
  }
`;

const IconContainer = styled.div`
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  z-index: 1;
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
