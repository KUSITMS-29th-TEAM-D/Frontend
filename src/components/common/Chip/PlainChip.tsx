import styled, { css } from 'styled-components';

interface PlainChipProps {
  primary?: boolean;
  width?: string;
  children: React.ReactNode;
}

export const PlainChip = ({ primary = false, width, children }: PlainChipProps) => {
  return (
    <StyledContainer $primary={primary} $width={width}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ $primary: boolean; $width?: string }>`
  ${({ theme }) => theme.font.desktop.body1m};

  width: ${(props) => props.$width || 'auto'};
  height: 42px;
  padding: 0 16px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  white-space: nowrap;

  cursor: default;

  ${(props) =>
    props.$primary
      ? css`
          color: ${({ theme }) => theme.color.primary700};
          background: ${({ theme }) => theme.color.primary50};
        `
      : css`
          color: ${({ theme }) => theme.color.secondary700};
          background: ${({ theme }) => theme.color.secondary50};
        `}

  @media ${({ theme }) => theme.device.tablet} {
    ${({ theme }) => theme.font.mobile.body1m};
  }

  @media ${({ theme }) => theme.device.mobile} {
    ${({ theme }) => theme.font.mobile.body1m};
  }
`;
