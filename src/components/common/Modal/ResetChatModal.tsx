import styled from 'styled-components';

import { ReactComponent as ErrorIcon } from '@/assets/icons/error.svg';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { DefaultModal } from '@/components/common/Modal/DefaultModal';
import { CATEGORY_TYPE } from '@/constants/discover';

interface ResetChatModalProps {
  onClose: () => void;
  onReset: () => void;
  category: string;
}

export const ResetChatModal = ({ onClose, onReset, category }: ResetChatModalProps) => {
  return (
    <DefaultModal height="312px">
      <StyledContentContainer>
        <div className="text-container">
          <ErrorIcon className="logo" />
          <div className="title">
            <span className="highlight">{CATEGORY_TYPE[category].title}</span> 을/를 다시
            대화하시겠습니까?
          </div>
          <div className="description">다시 대화하기를 누르시면 이전의 대화는 모두 삭제됩니다.</div>
        </div>
        <StyledButtonContainer>
          <PlainButton variant="disabled" height="48px" onClick={onClose}>
            취소하기
          </PlainButton>
          <PlainButton variant="gray" height="48px" onClick={onReset}>
            다시 대화하기
          </PlainButton>
        </StyledButtonContainer>
      </StyledContentContainer>
    </DefaultModal>
  );
};

const StyledContentContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
      width: 127px;
      height: 127px;
      margin-bottom: 4px;
    }

    .title {
      ${({ theme }) => theme.font.desktop.body1b};
      color: ${({ theme }) => theme.color.gray800};
      margin-bottom: 4px;

      .highlight {
        color: ${({ theme }) => theme.color.primary500};
      }
    }

    .description {
      ${({ theme }) => theme.font.desktop.body2r};
      color: ${({ theme }) => theme.color.gray800};
      margin-bottom: 12.5px;
    }
  }
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;
