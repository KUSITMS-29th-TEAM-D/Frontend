import styled from 'styled-components';

import { ReactComponent as CheckIcon } from '@/assets/icons/check.svg';
import Scrollbar from '@/components/Scrollbar';

interface DropdownContentProps {
  contents: string[];
  selected: string[] | string;
  multiple?: boolean;
  clickHandler?: (content: string) => void;
  maxHeight?: string;
}

export const DropdownContent = ({
  contents,
  selected,
  multiple = false,
  clickHandler,
  maxHeight,
}: DropdownContentProps) => {
  const selectedArray = Array.isArray(selected) ? selected : selected === '' ? [] : [selected];

  return (
    <StyledContainer $maxHeight={maxHeight}>
      {contents.map((content) => (
        <li
          key={content}
          onClick={() => clickHandler && clickHandler(content)}
          className={selectedArray.includes(content) && multiple ? 'active' : ''}
        >
          {multiple && <CheckIcon />}
          <span>{content}</span>
        </li>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.ul<{ $maxHeight?: string }>`
  position: absolute;
  bottom: -12px;
  left: 0;
  transform: translate(0%, 100%);
  z-index: 2;

  width: 100%;
  height: ${({ $maxHeight }) => $maxHeight};

  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);

  overflow-y: scroll;
  ${Scrollbar}

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
