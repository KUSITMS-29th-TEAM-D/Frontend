import styled from 'styled-components';

import { DefaultInput } from '@/components/common/Input/DefaultInput';

interface ButtonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  warning?: boolean;
  disabled?: boolean;
  buttonClickHandler?: () => void;
}

export const ButtonInput = ({
  warning = false,
  disabled = false,
  buttonClickHandler,
  ...props
}: ButtonInputProps) => {
  return (
    <DefaultInput warning={warning} {...props}>
      <StyledButton disabled={disabled} onClick={buttonClickHandler}>
        버튼
      </StyledButton>
    </DefaultInput>
  );
};

const StyledButton = styled.button`
  padding: 6px 16px;

  background: ${({ theme }) => theme.color.gray800};
  border-radius: 8px;

  ${({ theme }) => theme.font.desktop.label2};
  color: ${({ theme }) => theme.color.white};

  &:disabled {
    background: ${({ theme }) => theme.color.gray250};
    cursor: default;
  }
`;
