import styled from 'styled-components';

import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrowDown.svg';
import { ReactComponent as ArrowUpIcon } from '@/assets/icons/arrowUp.svg';

interface DropdownButtonProps {
  title?: string;
  placeholder: string;
  selected: string[] | string;
  active: boolean;
  clickHandler?: () => void;
}

export const DropdownButton = ({
  title,
  placeholder,
  selected,
  active,
  clickHandler,
}: DropdownButtonProps) => {
  const selectedArray = Array.isArray(selected) ? selected : selected === '' ? [] : [selected];

  if (title)
    return (
      <StyledContainer onClick={clickHandler}>
        <StyledTitle>{title}</StyledTitle>
        <StyledContent>
          {selectedArray.length === 0 ? (
            <span className="content-placeholder">{placeholder}</span>
          ) : (
            <span className="content-selected">
              {`${selectedArray[0]}${selectedArray.length > 1 ? ` 외 ${selectedArray.length - 1}` : ''}`}
            </span>
          )}
          {active ? <ArrowUpIcon className="icon" /> : <ArrowDownIcon className="icon" />}
        </StyledContent>
      </StyledContainer>
    );

  return (
    <StyledContainer onClick={clickHandler}>
      {selectedArray.length === 0 ? (
        <span className="title-placeholder">{placeholder}</span>
      ) : (
        <span className="title-selected">{selectedArray.join(', ')}</span>
      )}
      {active ? <ArrowUpIcon className="icon" /> : <ArrowDownIcon className="icon" />}
    </StyledContainer>
  );
};

const StyledContainer = styled.button`
  width: 100%;
  height: 48px;
  padding: 0px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);

  ${({ theme }) => theme.font.desktop.body2r};

  &:hover {
    background: ${({ theme }) => theme.color.gray50};
  }

  .content-placeholder {
    color: ${({ theme }) => theme.color.gray400};
  }

  .title-placeholder {
    color: ${({ theme }) => theme.color.gray300};
  }

  .content-selected {
    color: ${({ theme }) => theme.color.primary500};
  }

  .title-selected {
    color: ${({ theme }) => theme.color.gray700};
  }

  .icon {
    width: 24px;
    height: 24px;
  }
`;

const StyledTitle = styled.div`
  color: ${({ theme }) => theme.color.gray700};
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
