import styled, { css } from 'styled-components';
interface SmallButtonProps {
  children: React.ReactNode;
  filled?: boolean;
  width?: string | null;
  onClick?: () => void;
}

interface StyledButtonProps {
  $filled: boolean;
  $width: string | null;
}

export const SmallButton = ({
  children,
  filled = false,
  width = null,
  onClick,
}: SmallButtonProps) => {
  return (
    <StyledButton $filled={filled} $width={width} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme }) => theme.font.desktop.body2m};

  width: ${({ $width }) => $width};
  padding: 8px 24px;
  border-radius: 8px;

  ${(props) =>
    props.$filled
      ? css`
          color: ${props.theme.color.white};
          background: ${props.theme.color.gray800};

          &:hover {
            background: ${props.theme.color.gray700};
          }
        `
      : css`
          color: ${props.theme.color.gray800};
          background: transparent;

          &:hover {
            color: ${props.theme.color.primary600};
          }
        `}
`;
