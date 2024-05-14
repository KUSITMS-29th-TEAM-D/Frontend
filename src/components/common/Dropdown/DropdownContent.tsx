import styled from 'styled-components';

import { ReactComponent as CheckIcon } from '@/assets/icons/check.svg';

interface DropdownContentProps {
  contents: string[];
  selected: string[];
  multiple?: boolean;
  clickHandler?: (content: string) => void;
  maxHeight?: number;
}

export const DropdownContent = ({
  contents,
  selected,
  multiple = false,
  clickHandler,
  maxHeight,
}: DropdownContentProps) => {
  return (
    <StyledContainer $maxHeight={maxHeight}>
      {contents.map((content) => (
        <li
          key={content}
          onClick={() => clickHandler && clickHandler(content)}
          className={selected.includes(content) && multiple ? 'active' : ''}
        >
          {multiple && <CheckIcon />}
          <span>{content}</span>
        </li>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.ul<{ $maxHeight?: number }>`
  position: absolute;
  bottom: -12px;
  left: 0;
  transform: translate(0%, 100%);
  z-index: 2;

  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.13));

  overflow-y: scroll;
  height: ${({ $maxHeight }) => $maxHeight}px;

  li {
    display: flex;
    gap: 12px;

    padding: 12px 24px;
    background: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.font.desktop.body2r};

    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.color.gray100};
    }
  }

  .active {
    color: ${({ theme }) => theme.color.primary500};

    svg path {
      fill: ${({ theme }) => theme.color.primary500};
    }
  }
`;
