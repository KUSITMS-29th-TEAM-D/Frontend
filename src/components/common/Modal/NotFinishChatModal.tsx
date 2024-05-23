import styled from 'styled-components';

import { ReactComponent as ErrorIcon } from '@/assets/icons/error.svg';
import { PlainButton } from '@/components/common/Button/PlainButton';
import { DefaultModal } from '@/components/common/Modal/DefaultModal';
import { CATEGORY_TYPE } from '@/constants/discover';

interface NotFinishChatModalProps {
  onCancel: () => void;
  onConfirm: () => void;
  endCategory: string[];
}

export const NotFinishChatModal = ({
  onCancel,
  onConfirm,
  endCategory,
}: NotFinishChatModalProps) => {
  const notFinishCategory = Object.keys(CATEGORY_TYPE)
    .filter((category) => !endCategory.includes(category))
    .map((category) => CATEGORY_TYPE[category].title);

  const notFinishCategoryString = notFinishCategory.join(', ');

  return (
    <DefaultModal height="312px">
      <StyledContentContainer>
        <div className="text-container">
          <ErrorIcon className="logo" />
          <div className="title">
            완료하지 않은 주제 : <span className="highlight">{notFinishCategoryString}</span>
          </div>
          <div className="description">
            모든 주제에 대한 대화를 완료하지 않으면, 정확한 결과가 나오지 않을 수 있어요.
          </div>
        </div>
        <StyledButtonContainer>
          <PlainButton variant="disabled" height="48px" onClick={onCancel}>
            대화로 돌아가기
          </PlainButton>
          <PlainButton variant="gray" height="48px" onClick={onConfirm}>
            결과 보러가기
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
