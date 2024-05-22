import styled, { css } from 'styled-components';

import { ReactComponent as DownloadIcon } from '@/assets/icons/download.svg';
import { ReactComponent as KakaoIcon } from '@/assets/icons/kakaoIcon.svg';

interface ButtonProps {
  onClick?: () => void;
}

interface ShareButtonProps extends ButtonProps {
  desktop?: boolean;
}

export const KakaoShareButton = ({ onClick }: ButtonProps) => {
  return (
    <StyledShareButton type="button" onClick={onClick}>
      <KakaoIcon />
      <span>Kakao로 공유</span>
      <div style={{ width: '24px' }} />
    </StyledShareButton>
  );
};

export const DownloadButton = ({ onClick, desktop = false }: ShareButtonProps) => {
  return (
    <StyledDownloadButton type="button" onClick={onClick} $desktop={desktop}>
      <DownloadIcon />
      <span>이미지로 저장</span>
      <div style={{ width: '24px' }} />
    </StyledDownloadButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 48px;
  padding: 8px 16px;
  border-radius: 8px;

  span {
    ${({ theme }) => theme.font.desktop.label1m};
  }
`;

const StyledShareButton = styled(StyledButton)`
  background: #fee500;

  span {
    color: #191600;
  }

  &:hover {
    filter: brightness(80%);
  }
`;

const StyledDownloadButton = styled(StyledButton)<{ $desktop: boolean }>`
  ${({ $desktop }) =>
    $desktop
      ? css`
          background: ${({ theme }) => theme.color.primary50};

          span {
            color: ${({ theme }) => theme.color.primary700};
          }

          &:hover {
            background: ${({ theme }) => theme.color.primary100};
          }
        `
      : css`
          background: ${({ theme }) => theme.color.gray800};

          span {
            color: ${({ theme }) => theme.color.white};
          }

          svg path {
            fill: ${({ theme }) => theme.color.white};
          }
        `}
`;
