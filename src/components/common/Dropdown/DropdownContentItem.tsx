import styled, { css } from 'styled-components';

import { ReactComponent as CheckIcon } from '@/assets/icons/check.svg';

interface DropdownContentItemProps {
  onClick?: (content: string) => void;
  multiple?: boolean;
  active?: boolean;
  children: string;
}

export const DropdownContentItem = ({
  onClick,
  multiple = false,
  active = false,
  children,
}: DropdownContentItemProps) => {
  return (
    <StyledContainer onClick={() => onClick && onClick(children)} $active={active}>
      {multiple && <CheckIcon />}
      <span>{children}</span>
    </StyledContainer>
  );
};

const StyledContainer = styled.li<{ $active: boolean }>`
  display: flex;
  gap: 12px;

  padding: 12px 24px;
  background: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.font.desktop.body2r};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.gray100};
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.color.primary500};

      svg path {
        fill: ${theme.color.primary500};
      }
    `}
`;
