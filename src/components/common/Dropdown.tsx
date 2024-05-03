import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrowDown.svg';
import { ReactComponent as ArrowUpIcon } from '@/assets/icons/arrowUp.svg';

interface DropdownProps {
  title: string;
  contents: string[];
  selectedContents: string[];
  setSelectedContents: (selected: string[]) => void;
}

export const Dropdown = ({ title, contents, selectedContents }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
      <StyledContent onClick={() => setIsOpen((prev) => !prev)}>
        <StyledLabel>
          <span className="filter-title">{title}</span>
          {selectedContents.length === 0 ? (
            <span className="no-filter">키워드 추가</span>
          ) : (
            <span className="selected">
              {`${selectedContents[0]}${selectedContents.length > 1 ? ` 외 ${selectedContents.length - 1}` : ''}`}
            </span>
          )}
        </StyledLabel>
        {isOpen ? <ArrowUpIcon className="icon" /> : <ArrowDownIcon className="icon" />}
      </StyledContent>
      {isOpen && (
        <StyledExpandedContent>
          {contents.map((content) => (
            <li
              key={content}
              className={`content ${selectedContents.includes(content) && 'active'}`}
              onClick={() => {
                // TODO: 항목 추가 로직 구현 (유의: 중복 추가, 순서 정렬)
              }}
            >
              {content}
            </li>
          ))}
        </StyledExpandedContent>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 12px;

  width: fit-content;
`;

const StyledContent = styled.div`
  padding: 12px 10px 12px 18px;

  display: flex;
  align-items: center;
  gap: 10px;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

  .icon {
    width: 24px;
    cursor: pointer;
  }
`;

const StyledLabel = styled.span`
  ${({ theme }) => theme.font.desktop.body1m};

  display: flex;
  gap: 10px;

  .filter-title {
    color: ${({ theme }) => theme.color.gray700};
  }

  .no-filter {
    color: ${({ theme }) => theme.color.gray300};
  }

  .selected {
    color: ${({ theme }) => theme.color.secondary500};
  }
`;

const StyledExpandedContent = styled.ul`
  position: absolute;
  top: 62px;
  left: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

  overflow: hidden;

  .content {
    ${({ theme }) => theme.font.desktop.body1m};
    color: ${({ theme }) => theme.color.gray800};
    background: ${({ theme }) => theme.color.white};

    text-align: center;
    padding: 12px 24px;

    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.color.gray100};
    }
  }

  .active {
    // TODO: 선택된 항목 디자인 구현
  }
`;
