import styled, { css } from 'styled-components';

interface CategoryButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  done?: boolean;
  active?: boolean;
}

export const CategoryButton = ({
  done = false,
  active = false,
  children,
  ...props
}: CategoryButtonProps) => {
  return (
    <StyledButton $done={done} $active={active} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $done: boolean; $active: boolean }>`
  width: 68px;
  height: 39px;

  ${({ theme }) => theme.font.desktop.body2m};
  color: ${({ theme }) => theme.color.primary500};

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.primary500};
  background: ${({ theme }) => theme.color.white};

  ${({ $done }) =>
    $done &&
    css`
      color: ${({ theme }) => theme.color.gray250};
      background: ${({ theme }) => theme.color.gray150};
      border-color: ${({ theme }) => theme.color.gray250};
    `}

  ${({ $active }) =>
    $active &&
    css`
      color: ${({ theme }) => theme.color.white};
      background: ${({ theme }) => theme.color.primary500};
    `}
`;
