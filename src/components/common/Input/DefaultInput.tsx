import { useState } from 'react';

import styled, { css } from 'styled-components';

interface DefaultInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  warning?: boolean;
  children?: React.ReactNode;
  width?: string;
}

export const DefaultInput = ({ warning = false, width, children, ...props }: DefaultInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <StyledContainer $warning={warning} $focused={isFocused} $width={width}>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} {...props} />
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{
  $warning: boolean;
  $focused: boolean;
  $width: string | undefined;
}>`
  display: flex;
  align-items: center;
  gap: 12px;

  ${({ $width }) => $width && `width: ${$width};`}
  padding: 8px 12px;

  border: 1px solid transparent;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);

  input {
    flex: 1 0 0;
    background: transparent;

    ${({ theme }) => theme.font.desktop.body2r};
    color: ${({ theme }) => theme.color.gray700};

    &::placeholder {
      color: ${({ theme }) => theme.color.gray300};
    }
  }

  ${({ $focused }) =>
    $focused &&
    css`
      background: ${({ theme }) => theme.color.gray100};
    `}

  ${({ $warning }) =>
    $warning &&
    css`
      border-color: ${({ theme }) => theme.color.secondary500};
      background: ${({ theme }) => theme.color.gray100};

      input {
        color: ${({ theme }) => theme.color.secondary500};
      }
    `}
`;
