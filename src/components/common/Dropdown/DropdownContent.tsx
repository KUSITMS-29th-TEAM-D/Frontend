import styled from 'styled-components';

import Scrollbar from '@/components/Scrollbar';
import { DropdownContentItem } from '@/components/common/Dropdown/DropdownContentItem';

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
        <DropdownContentItem
          key={content}
          {...(clickHandler && { onClick: clickHandler })}
          multiple={multiple}
          active={selectedArray.includes(content) && multiple}
        >
          {content}
        </DropdownContentItem>
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

  overflow-y: auto;
  ${Scrollbar}
`;
