import styled from 'styled-components';

import { ReactComponent as CheckIcon } from '@/assets/icons/check.svg';

interface DropdownContentProps {
  contents: string[];
  selected: string[];
  multiple?: boolean;
  clickHandler?: (content: string) => void;
}

export const DropdownContent = ({
  contents,
  selected,
  multiple = false,
  clickHandler,
}: DropdownContentProps) => {
  /* return (
    <StyledContainer>
      {contents.map((content) => (
        <li
          key={content}
          className={`content ${selectedContents.includes(content) && 'active'}`}
          onClick={() => {
            // TODO: 순서정렬 로직 필요?
            if (!selectedContents.includes(content))
              setSelectedContents([...selectedContents, content]);
          }}
        >
          {content}
        </li>
      ))}
    </StyledContainer>
  ); */
  return (
    <StyledContainer>
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

const StyledContainer = styled.ul`
  position: absolute;
  bottom: -12px;
  left: 0;
  transform: translate(0%, 100%);

  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.13));

  overflow: hidden;

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

/* const StyledExpandedContent = styled.ul`
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
`; */
