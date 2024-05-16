import styled, { css } from 'styled-components';

import { ReactComponent as GoogleIcon } from '@/assets/icons/googleIcon.svg';
import { ReactComponent as KakaoIcon } from '@/assets/icons/kakaoIcon.svg';
import { ReactComponent as NaverIcon } from '@/assets/icons/naverIcon.svg';

type Provider = 'GOOGLE' | 'NAVER' | 'KAKAO';

interface SocialLoginButtonProps {
  provider: Provider;
}

interface ButtonProps {
  $provider: Provider;
}

const BUTTON_TEXT = {
  GOOGLE: 'Google로 계속하기',
  NAVER: 'Naver로 계속하기',
  KAKAO: 'Kakao로 계속하기',
};

export const SocialLoginButton = ({ provider }: SocialLoginButtonProps) => {
  const handleClick = () => {
    const redirectUrl = import.meta.env[`VITE_OAUTH_${provider}_REDIRECT_URI` as const];
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };

  return (
    <StyledButton type="button" onClick={handleClick} $provider={provider}>
      <IconContainer>
        {provider === 'GOOGLE' && <GoogleIcon />}
        {provider === 'NAVER' && <NaverIcon />}
        {provider === 'KAKAO' && <KakaoIcon />}
      </IconContainer>
      <p className="button-text">{BUTTON_TEXT[provider]}</p>
      <div style={{ width: 24, height: 24 }} />
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  height: 100%;
  padding: 0 24px;

  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  border: 1px solid;

  ${({ $provider }) => {
    switch ($provider) {
      case 'GOOGLE':
        return css`
          background: white;
          border-color: #dfdfdf;
        `;
      case 'NAVER':
        return css`
          background: #03c75a;
          border-color: #03c75a;
        `;
      case 'KAKAO':
        return css`
          background: #fee500;
          border-color: #fee500;
        `;
    }
  }};

  &:hover {
    filter: brightness(80%);
  }

  .button-text {
    margin-left: 16px;
    word-wrap: break-word;
    ${({ theme }) => theme.font.desktop.body2m};

    ${({ $provider }) => {
      switch ($provider) {
        case 'GOOGLE':
          return css`
            color: ${({ theme }) => theme.color.gray800};
          `;
        case 'NAVER':
          return css`
            color: ${({ theme }) => theme.color.white};
          `;
        case 'KAKAO':
          return css`
            color: #191600;
          `;
      }
    }};

    @media ${({ theme }) => theme.device.mobile} {
      ${({ theme }) => theme.font.mobile.body2m};
    }
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
