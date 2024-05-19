import styled from 'styled-components';

import { PlainButton } from '@/components/common/Button/PlainButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
export const ExperienceDetailModal = ({ isOpen, onClose, onConfirm }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <TitleContainer>프로그램 신청</TitleContainer>
        <ContentContainer>
          해당 프로그램을 <Highlight>신청</Highlight>하시겠습니까?
        </ContentContainer>
        <ButtonContainer>
          <StyledButton height="48px" onClick={onClose}>
            취소하기
          </StyledButton>
          <PlainButton variant="gray" height="48px" onClick={onConfirm}>
            신청하기
          </PlainButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17.85, 17.85, 17.85, 0.36);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 618px;
  height: 338px;
  background: white;
  padding: 24px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(8px);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;

const TitleContainer = styled.div`
  align-self: stretch;
  text-align: center;
  color: ${({ theme }) => `${theme.color.gray800}`};
  ${({ theme }) => theme.font.desktop.body1b};
`;

const ContentContainer = styled.div`
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.title2};
`;

const ButtonContainer = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  gap: 8px;
  display: inline-flex;
`;

const StyledButton = styled(PlainButton)`
  background: ${({ theme }) => `${theme.color.gray200}`};
  &:hover {
    background: ${({ theme }) => `${theme.color.gray200}`};
  }
  color: inherit;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.color.primary500};
`;
