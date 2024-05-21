import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { PlainButton } from '@/components/common/Button/PlainButton';

interface AmountModalProps {
  isOpen: boolean;
  onApply: (min: number, max: number) => void;
  onClose: () => void;
}

export const AmountModal = ({ isOpen, onApply, onClose }: AmountModalProps) => {
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(20000);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const handleApply = () => {
    onApply(minAmount, maxAmount);
  };

  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <ModalTitle>금액 선택</ModalTitle>
        <InputContainer>
          <Input
            id="minAmount"
            type="number"
            value={minAmount}
            onChange={(e) => setMinAmount(parseInt(e.target.value))}
          />
        </InputContainer>
        <MiddleContainer>~</MiddleContainer>
        <InputContainer>
          <Input
            id="maxAmount"
            type="number"
            value={maxAmount}
            onChange={(e) => setMaxAmount(parseInt(e.target.value))}
          />
        </InputContainer>
        <ButtonContainer>
          <StyledButton height="48px" onClick={onClose}>
            취소하기
          </StyledButton>
          <PlainButton variant="gray" height="48px" onClick={handleApply}>
            적용하기
          </PlainButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //padding: 24px;
  background: ${({ isOpen }) => (isOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 618px;
  height: 338px;
  padding: 24px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(8px);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
`;
const ModalTitle = styled.div`
  align-self: stretch;
  text-align: center;
  color: ${({ theme }) => theme.color.gray800};
  ${({ theme }) => theme.font.desktop.body1b};
  word-wrap: break-word;
`;
const InputContainer = styled.div`
  align-self: stretch;
  height: 152px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
`;

const Input = styled.input`
  align-self: stretch;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: right;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.13);
  border-radius: 8px;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 12px;
  display: flex;

  ${({ theme }) => theme.font.desktop.body1b};
  color: ${({ theme }) => theme.color.gray300};
`;

const MiddleContainer = styled.div`
  color: ${({ theme }) => theme.color.gray700};
  ${({ theme }) => theme.font.desktop.title1};
`;
const ButtonContainer = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
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
