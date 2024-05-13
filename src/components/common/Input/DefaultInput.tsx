import { useState } from 'react';

import styled, { css } from 'styled-components';

interface DefaultInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  warning?: boolean;
  children?: React.ReactNode;
}

export const DefaultInput = ({ warning = false, children, ...props }: DefaultInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <StyledContainer $warning={warning} $focused={isFocused}>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} {...props} />
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ $warning: boolean; $focused: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 8px 12px;

  border: 1px solid transparent;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.13));

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
