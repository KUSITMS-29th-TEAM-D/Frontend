import styled, { css } from 'styled-components';

type PlainButtonVariant = 'primary' | 'gray';

interface PlainButtonProps {
  children: React.ReactNode;
  variant: PlainButtonVariant;
  width?: string | null;
  height?: string | null;
  onClick?: () => void;
  disabled?: boolean;
}

interface StyledButtonProps {
  $variant: PlainButtonVariant;
  $width: string | null;
  $height: string | null;
}

export const PlainButton = ({
  children,
  variant,
  width = null,
  height = null,
  onClick,
  disabled = false,
}: PlainButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      $width={width}
      $height={height}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

const getVariantStyle = ($variant: PlainButtonVariant) => {
  switch ($variant) {
    case 'gray':
      return css`
        color: ${(props) => props.theme.color.white};
        background: ${(props) => props.theme.color.gray800};

        &:hover {
          background: ${(props) => props.theme.color.gray700};
        }
      `;

    case 'primary':
      return css`
        color: ${(props) => props.theme.color.primary700};
        background: ${(props) => props.theme.color.primary50};

        &:hover {
          background: ${(props) => props.theme.color.primary100};
        }
      `;
  }
};

const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme }) => theme.font.desktop.label1m};

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: 8px 24px;
  border-radius: 8px;

  ${({ $variant }) => getVariantStyle($variant)}

  &:disabled {
    color: ${(props) => props.theme.color.gray700};
    background: ${(props) => props.theme.color.gray200};
    cursor: not-allowed;
  }
`;
