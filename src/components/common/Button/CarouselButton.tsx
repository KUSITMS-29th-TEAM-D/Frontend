import styled from 'styled-components';

import { ReactComponent as PrevIcon } from '@/assets/icons/arrowLeft.svg';
import { ReactComponent as NextIcon } from '@/assets/icons/arrowRight.svg';

export type CarouselButtonDirection = 'prev' | 'next';

interface CarouselButtonProps {
  direction: CarouselButtonDirection;
  onClick?: () => void;
}

export const CarouselButton = ({ direction, onClick }: CarouselButtonProps) => {
  return (
    <StyledButton $direction={direction} onClick={onClick}>
      {direction === 'prev' ? <PrevIcon /> : <NextIcon />}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $direction: CarouselButtonDirection }>`
  padding: 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

  position: absolute;
  top: 50%;
  left: ${({ $direction }) => ($direction === 'prev' ? '0%' : '100%')};
  z-index: 1;
  transform: translate(-50%, -50%);
`;
