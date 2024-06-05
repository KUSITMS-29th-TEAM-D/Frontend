import { useState, useEffect } from 'react';

import styled from 'styled-components';

import { PlainButton } from '@/components/common/Button/PlainButton';

interface AmountModalProps {
  isopen: boolean;
  onApply: (min: number, max: number) => void;
  onClose: () => void;
}

export const AmountModal = ({ isopen, onApply, onClose }: AmountModalProps) => {
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(20000);

  useEffect(() => {
    document.body.style.overflow = isopen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isopen]);

  const handleApply = () => {
    onApply(minAmount, maxAmount);
    onClose();
  };

  return (
    <ModalOverlay isopen={isopen}>
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

const ModalOverlay = styled.div<{ isopen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100vw;
  height: 100vh;
  //padding: 24px;
  background: ${({ theme }) => theme.color.bgModal};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 618px;
  height: 338px;
  padding: 24px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 16px;
  overflow: hidden;
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
  padding-bottom: 24px;
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
  margin-top: 24px;
`;

const StyledButton = styled(PlainButton)`
  background: ${({ theme }) => `${theme.color.gray200}`};
  &:hover {
    background: ${({ theme }) => `${theme.color.gray200}`};
  }
  color: inherit;
`;
