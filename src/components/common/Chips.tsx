import styled, { css } from 'styled-components';

interface ChipsProps {
  primary?: boolean;
  children: React.ReactNode;
}

export const Chips = ({ primary = false, children }: ChipsProps) => {
  return <StyledContainer $primary={primary}>{children}</StyledContainer>;
};

const StyledContainer = styled.div<{ $primary: boolean }>`
  ${({ theme }) => theme.font.desktop.body1m};

  height: 42px;
  padding: 0 16px;
  border-radius: 8px;

  display: flex;
  align-items: center;

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
`;
