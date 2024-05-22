import { useState } from 'react';

import styled from 'styled-components';

import { PlainButton } from '@/components/common/Button/PlainButton';
import { DefaultModal } from '@/components/common/Modal/DefaultModal';

interface SelectAmountModalProps {
  selectedAmount: { min: number; max: number };
  handleCancel: () => void;
  handleConfirm: (price: { min: number; max: number }) => void;
}

export const SelectAmountModal = ({
  selectedAmount,
  handleCancel,
  handleConfirm,
}: SelectAmountModalProps) => {
  const [price, setPrice] = useState(selectedAmount);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPrice((prev) => ({ ...prev, [id]: Number(value) }));
  };

  return (
    <DefaultModal height="338px">
      <StyledContentContainer>
        <div className="title">금액 선택</div>
        <div className="inputField-container">
          <StyledInputField>
            <input id="min" value={price.min} onChange={handlePriceChange} />
            <span>원</span>
          </StyledInputField>
          <span className="range">~</span>
          <StyledInputField>
            <input id="max" value={price.max} onChange={handlePriceChange} />
            <span>원</span>
          </StyledInputField>
        </div>
        <StyledButtonContainer>
          <PlainButton variant="disabled" height="48px" onClick={handleCancel}>
            취소하기
          </PlainButton>
          <PlainButton
            height="48px"
            onClick={() => {
              handleConfirm(price);
            }}
            disabled={price.min > price.max}
          >
            적용하기
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

  .title {
    ${({ theme }) => theme.font.desktop.body1b};
    color: ${({ theme }) => theme.color.gray800};
  }

  .inputField-container {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    .range {
      ${({ theme }) => theme.font.desktop.title1};
      color: ${({ theme }) => theme.color.gray700};
    }
  }
`;

const StyledInputField = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  width: 100%;
  height: 48px;
  padding: 0 16px;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);

  span {
    ${({ theme }) => theme.font.desktop.body2r};
    color: ${({ theme }) => theme.color.gray700};
  }

  input {
    width: 100%;
    ${({ theme }) => theme.font.desktop.body1b};
    color: ${({ theme }) => theme.color.gray300};
    background: transparent;
    text-align: right;
  }
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;
