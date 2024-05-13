import styled, { css } from 'styled-components';

import { ReactComponent as DeleteIcon } from '@/assets/icons/close.svg';

interface KeywordChipProps {
  selected?: boolean;
  children: string;
  deleteHandler?: () => void;
}

export const KeywordChip = ({ selected = false, children, deleteHandler }: KeywordChipProps) => {
  return (
    <StyledKeywordChip $selected={selected}>
      {children}
      {selected && <StyledDeleteIcon onClick={deleteHandler} />}
    </StyledKeywordChip>
  );
};

const StyledKeywordChip = styled.div<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;

  width: fit-content;
  padding: 7px 16px;

  ${({ theme }) => theme.font.desktop.label1m};
  color: ${({ theme }) => theme.color.primary700};
  text-align: center;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  cursor: default;

  ${({ $selected, theme }) =>
    $selected
      ? css`
          padding: 7px 12px;
          background: ${theme.color.primary500};
          color: ${theme.color.white};
        `
      : css`
          &:hover {
            background: ${({ theme }) => theme.color.primary50};
            cursor: pointer;
          }
        `};
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  path {
    fill: ${({ theme }) => theme.color.white};
  }
`;
