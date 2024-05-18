import styled from 'styled-components';

import BackgroundImg from '@/assets/backgrounds/designResultBackground.png';
import { userService } from '@/services/UserService';

interface ResultViewProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  definition: string;
}

export const ResultView = ({ children, definition, ...props }: ResultViewProps) => {
  return (
    <StyledContainer {...props}>
      <StyledInnerContainer {...props}>
        <StyledContent>
          <div className="title">
            <span className="highlight">{userService.getUserNickname()}</span>님은 이런 브랜드가
            되고 싶군요!
          </div>
          <div className="brand">“{definition}”</div>
          {children}
        </StyledContent>
      </StyledInnerContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  min-width: 100%;

  background-image: url(${BackgroundImg});
  background-size: cover;
`;

const StyledInnerContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  width: 830px;

  .title {
    ${({ theme }) => theme.font.desktop.title2};
    color: ${({ theme }) => theme.color.gray700};

    .highlight {
      color: ${({ theme }) => theme.color.primary500};
    }
  }

  .brand {
    ${({ theme }) => theme.font.desktop.h2};
    color: ${({ theme }) => theme.color.primary600};
    word-break: keep-all;
    text-align: center;
    margin-bottom: 32px;
  }
`;
