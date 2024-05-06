import styled, { useTheme } from 'styled-components';

import { ReactComponent as GoogleIcon } from '@/assets/icons/googleIcon.svg';
interface ButtonTextProps {
  $color: string;
}

export const GoogleLoginButton = () => {
  const theme = useTheme();

  const GoogleButtonClick = () => {
    const redirectUrl = import.meta.env.VITE_OAUTH_GOOGLE_REDIRECT_URI;
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };

  return (
    <>
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
  height: 100%;
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
  word-wrap: break-word;
  color: ${(props) => props.$color};
  ${({ theme }) => theme.font.desktop.body2m};

  @media ${({ theme }) => theme.device.mobile} {
    ${({ theme }) => theme.font.mobile.body2m};
  }
`;

export default GoogleLoginButton;
