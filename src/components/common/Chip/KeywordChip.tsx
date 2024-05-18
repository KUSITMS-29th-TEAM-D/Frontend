import styled, { css } from 'styled-components';

interface KeywordChipProps {
  selected?: boolean;
  children: string;
  selectHandler?: (selectedKeyword: string) => void;
  deleteHandler?: (selectedKeyword: string) => void;
  toggleHandler?: () => void;
}

export const KeywordChip = ({
  selected = false,
  children,
  selectHandler,
  deleteHandler,
  toggleHandler,
}: KeywordChipProps) => {
  return (
    <StyledKeywordChip
      $selected={selected}
      onClick={() => {
        toggleHandler && toggleHandler();
        if (!selected) selectHandler && selectHandler(children);
        else deleteHandler && deleteHandler(children);
      }}
    >
      {children}
    </StyledKeywordChip>
  );
};

const StyledKeywordChip = styled.button<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;

  width: fit-content;
  padding: 7px 16px;

  ${({ theme }) => theme.font.desktop.label1m};

  text-align: center;
  border-radius: 8px;

  ${({ $selected, theme }) =>
    $selected
      ? css`
          background: ${theme.color.primary500};
          color: ${theme.color.white};

          @media ${({ theme }) => theme.device.desktop} {
            &:hover {
              background: ${theme.color.primary600};
            }
          }
        `
      : css`
          background: ${({ theme }) => theme.color.white};
          color: ${({ theme }) => theme.color.primary700};

          @media ${({ theme }) => theme.device.desktop} {
            &:hover {
              background: ${({ theme }) => theme.color.primary100};
            }
          }
        `};
`;
