import styled, { css } from 'styled-components';

type PlainButtonVariant = 'primary' | 'primary2' | 'gray' | 'disabled';

interface PlainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: PlainButtonVariant;
  width?: string | null;
  height?: string | null;
}

interface StyledButtonProps {
  $variant: PlainButtonVariant;
  $width: string | null;
  $height: string | null;
}

export const PlainButton = ({
  children,
  variant = 'gray',
  width = null,
  height = null,
  ...props
}: PlainButtonProps) => {
  return (
    <StyledButton $variant={variant} $width={width} $height={height} {...props}>
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

    case 'primary2':
      return css`
        color: ${(props) => props.theme.color.primary50};
        background: ${(props) => props.theme.color.primary600};

        &:hover {
          background: ${(props) => props.theme.color.primary700};
        }
      `;

    case 'disabled':
      return css`
        color: ${(props) => props.theme.color.gray700};
        background: ${(props) => props.theme.color.gray200};
      `;
  }
};

const StyledButton = styled.button<StyledButtonProps>`
  ${({ theme }) => theme.font.desktop.label1m};

  width: ${({ $width }) => ($width ? $width : '100%')};
  height: ${({ $height }) => $height};
  padding: 8px 24px;
  border-radius: 8px;

  ${({ $variant }) => getVariantStyle($variant)}

  &:disabled {
    color: ${(props) => props.theme.color.gray700};
    background: ${(props) => props.theme.color.gray200};
    cursor: default;
  }
`;
