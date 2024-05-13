import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { DropdownButton } from '@/components/common/Dropdown/DropdownButton';
import { DropdownContent } from '@/components/common/Dropdown/DropdownContent';

interface DropdownProps {
  title?: string;
  placeholder: string;
  contents: string[];
  selected: string[];
  multiple?: boolean;
  clickContentHandler?: (content: string) => void;
}

export const Dropdown = ({
  title,
  placeholder,
  contents,
  selected,
  multiple = false,
  clickContentHandler,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(!false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <StyledContainer ref={dropdownRef}>
      <DropdownButton
        title={title}
        placeholder={placeholder}
        selected={selected}
        active={isOpen}
        clickHandler={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <DropdownContent
          contents={contents}
          selected={selected}
          multiple={multiple}
          clickHandler={clickContentHandler}
        />
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  //width: fit-content;
`;
