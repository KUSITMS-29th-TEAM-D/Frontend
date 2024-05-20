import styled, { css } from 'styled-components';

interface SpeechBoxProps {
  children: string;
  isUser?: boolean;
}

export const SpeechBox = ({ children, isUser = false }: SpeechBoxProps) => {
  return <StyledContainer $isUser={isUser}>{children}</StyledContainer>;
};

const StyledContainer = styled.div<{ $isUser: boolean }>`
  width: fit-content;
  max-width: 550px;
  padding: 10px;
  border: 1px solid;

  ${({ theme }) => theme.font.desktop.label1r};
  color: ${({ theme }) => theme.color.gray800};
  word-wrap: break-word;
  white-space: pre-wrap;

  ${({ $isUser }) =>
    $isUser
      ? css`
          border-radius: 8px 0 8px 8px;
          border-color: ${({ theme }) => theme.color.primary100};
          background: ${({ theme }) => theme.color.primary50};
        `
      : css`
          border-radius: 0 8px 8px 8px;
          border-color: ${({ theme }) => theme.color.gray150};
          background: ${({ theme }) => theme.color.white};
        `}
`;
