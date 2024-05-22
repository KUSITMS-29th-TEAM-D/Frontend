import { useEffect } from 'react';

import styled from 'styled-components';

import { PlainButton } from '@/components/common/Button/PlainButton';
import { DefaultModal } from '@/components/common/Modal/DefaultModal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ExperienceDetailModal = ({ isOpen, onClose, onConfirm }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute('style', 'overflow: hidden');
    } else {
      document.body.setAttribute('style', 'overflow: auto');
    }
    return () => {
      document.body.setAttribute('style', 'overflow: auto');
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <DefaultModal>
      <ContentContainer>
        <TitleContainer>프로그램 신청</TitleContainer>
        <DescriptionContainer>
          해당 프로그램을 <Highlight>신청</Highlight>하시겠습니까?
        </DescriptionContainer>
        <ButtonContainer>
          <PlainButton variant="disabled" height="48px" onClick={onClose}>
            취소하기
          </PlainButton>
          <PlainButton variant="gray" height="48px" onClick={onConfirm}>
            신청하기
          </PlainButton>
        </ButtonContainer>
      </ContentContainer>
    </DefaultModal>
  );
};

const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled.div`
  align-self: stretch;
  text-align: center;
  color: ${({ theme }) => `${theme.color.gray800}`};
  ${({ theme }) => theme.font.desktop.body1b};
`;

const DescriptionContainer = styled.div`
  color: ${({ theme }) => `${theme.color.gray700}`};
  ${({ theme }) => theme.font.desktop.title2};
`;

const ButtonContainer = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  gap: 8px;
  display: inline-flex;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.color.primary500};
`;
