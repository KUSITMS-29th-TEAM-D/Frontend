import styled from 'styled-components';

interface PlainButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  width?: string | null;
  height?: string | null;
  onClick?: () => void;
}

interface StyledButtonProps {
  $primary: boolean;
  $width: string | null;
  $height: string | null;
}

export const PlainButton = ({
  children,
  primary = false,
  width = null,
  height = null,
  onClick,
}: PlainButtonProps) => {
  return (
    <StyledButton $primary={primary} $width={width} $height={height} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme }) => theme.font.desktop.label1m};

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: 8px 24px;

  color: ${(props) => (props.$primary ? props.theme.color.primary700 : props.theme.color.white)};
  background: ${(props) =>
    props.$primary ? props.theme.color.primary50 : props.theme.color.gray800};
  border-radius: 8px;
`;
