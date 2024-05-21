import styled, { css } from 'styled-components';

import ChatBotProfile from '@/assets/icons/chatbot.png';
import { ReactComponent as User } from '@/assets/icons/user.svg';

interface SpeechBoxProps {
  children: string;
  isUser?: boolean;
  isContinuous: boolean;
}

export const SpeechBox = ({ children, isUser = false, isContinuous }: SpeechBoxProps) => {
  const userNickname = '유저이름';

  return (
    <StyledContainer $isUser={isUser}>
      {isContinuous ? (
        <div style={{ width: '40px' }} />
      ) : isUser ? (
        <UserProfile>
          <User />
        </UserProfile>
      ) : (
        <img src={ChatBotProfile} alt="profile" width={40} height={40} />
      )}
      <div className="text-container">
        {!isContinuous && <span>{isUser ? userNickname : '셀퍼'}</span>}
        <StyledTextBox $isUser={isUser} $continuous={isContinuous}>
          {children}
        </StyledTextBox>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ $isUser: boolean }>`
  display: flex;
  flex-direction: ${({ $isUser }) => ($isUser ? 'row-reverse' : 'row')};
  gap: 12px;

  .text-container {
    text-align: ${({ $isUser }) => ($isUser ? 'right' : 'left')};

    span {
      ${({ theme }) => theme.font.desktop.label1m};
      color: ${({ theme }) => theme.color.gray800};
    }
  }
`;

const UserProfile = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.primary50};

  svg path {
    fill: ${({ theme }) => theme.color.primary500};
  }
`;

const StyledTextBox = styled.div<{ $isUser: boolean; $continuous: boolean }>`
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

  margin-bottom: ${({ $continuous }) => ($continuous ? '24px' : '8px')};
`;
