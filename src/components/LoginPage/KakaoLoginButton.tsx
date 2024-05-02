import React from 'react';

import styled, { useTheme } from 'styled-components';

import { ReactComponent as KakaoIcon } from '@/assets/icons/kakaoIcon.svg';

interface ButtonTextProps {
  $color: string;
}
export const KakaoLoginButton = () => {
  const theme = useTheme();
  const KakaoButtonClick = () => {
    const redirectUrl = process.env.OAUTH_KAKAO_REDIRECT_URI;
    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      console.error('찾을 수 없음');
    }
  };

  return (
    <KakaoBtn onClick={KakaoButtonClick}>
      <IconContainer>
        <KakaoIcon />
      </IconContainer>
      <ButtonText $color={theme.color.gray800}>Kakao로 계속하기</ButtonText>
      <div style={{ width: 24, height: 24 }} />
    </KakaoBtn>
  );
};

const KakaoBtn = styled.button`
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: #fee500;
  &:hover {
    background: #fee500;
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

export default KakaoLoginButton;
