import { useState } from 'react';

import styled from 'styled-components';

import { SelectAmountModal } from '@/components/common/Modal/SelectAmountModal';

interface AmountFilterButtonProps {
  minPrice: number;
  maxPrice: number;
  onApply: (min: number, max: number) => void;
}

export const AmountFilterButton = ({ minPrice, maxPrice, onApply }: AmountFilterButtonProps) => {
  const [showAmountModal, setShowAmountModal] = useState<boolean>(false);

  return (
    <>
      <StyledContainer
        onClick={() => {
          setShowAmountModal(true);
        }}
      >
        <span>금액</span>
        <div>
          <span className="amount">{minPrice}</span>
          <span className="range">~</span>
          <span className="amount">{maxPrice}</span>
          <span className="unit">원</span>
        </div>
      </StyledContainer>
      {showAmountModal && (
        <SelectAmountModal
          selectedAmount={{ min: minPrice, max: maxPrice }}
          handleCancel={() => {
            setShowAmountModal(false);
          }}
          handleConfirm={(newSelected) => {
            onApply(newSelected.min, newSelected.max);
            setShowAmountModal(false);
          }}
        />
      )}
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 312px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.font.desktop.body2r};

  border-radius: 8px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.gray100};
  }

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    .amount {
      ${({ theme }) => theme.font.desktop.body1m};
      color: ${({ theme }) => theme.color.gray300};
    }

    .range {
      ${({ theme }) => theme.font.desktop.body1b};
      color: ${({ theme }) => theme.color.gray700};
    }

    .unit {
      ${({ theme }) => theme.font.desktop.body2r};
      color: ${({ theme }) => theme.color.gray700};
    }
  }
`;
