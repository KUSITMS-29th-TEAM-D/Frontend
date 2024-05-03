import React from 'react';

import styled, { useTheme } from 'styled-components';

import { ReactComponent as GoogleIcon } from '@/assets/icons/googleIcon.svg';
import LoginToken from '@/components/LoginPage/LoginToken';
interface ButtonTextProps {
  $color: string;
}

export const GoogleLoginButton = () => {
  const theme = useTheme();

  const GoogleButtonClick = () => {
    const redirectUrl = process.env.OAUTH_Google_REDIRECT_URI;
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };

  return (
    <>
      <LoginToken /> {/*우선 구글버튼에만 일단 배치했습니다*/}
      <GoogleBtn onClick={GoogleButtonClick}>
        <IconContainer>
          <GoogleIcon />
        </IconContainer>
        <ButtonText $color={theme.color.gray800}>Google로 계속하기</ButtonText>
        <div style={{ width: 24, height: 24 }} />
      </GoogleBtn>
    </>
  );
};

const GoogleBtn = styled.button`
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #dfdfdf;
  background: white;
  &:hover {
    background: white;
    filter: brightness(80%);
  }
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.p<ButtonTextProps>`
  margin-left: 16px;
  color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
`;

export default GoogleLoginButton;
