import React from 'react';

import styled, { useTheme } from 'styled-components';

import { ReactComponent as NaverIcon } from '@/assets/icons/naverIcon.svg';

interface ButtonTextProps {
  $color: string;
}
export const NaverLoginButton = () => {
  const theme = useTheme();
  const NaverButtonClick = () => {
    const redirectUrl = import.meta.env.OAUTH_NAVER_REDIRECT_URI;
    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      //console.error('찾을 수 없음');
    }
  };

  return (
    <NaverBtn onClick={NaverButtonClick}>
      <IconContainer>
        <NaverIcon />
      </IconContainer>
      <ButtonText $color={theme.color.white}>Naver로 계속하기</ButtonText>
      <div style={{ width: 24, height: 24 }} />
    </NaverBtn>
  );
};

const NaverBtn = styled.button`
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: #03c75a;

  &:hover {
    background: #03c75a;
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

export default NaverLoginButton;
