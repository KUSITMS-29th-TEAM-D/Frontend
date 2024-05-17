import styled from 'styled-components';

import { ReactComponent as PrevIcon } from '@/assets/icons/arrowLeft.svg';
import { ReactComponent as NextIcon } from '@/assets/icons/arrowRight.svg';

export type CarouselButton2Direction = 'prev' | 'next';

interface CarouselButton2Props {
  direction: CarouselButton2Direction;
  onClick?: () => void;
}

export const CarouselButton2 = ({ direction, onClick }: CarouselButton2Props) => {
  return (
    <StyledButton $direction={direction} onClick={onClick}>
      {direction === 'prev' ? <PrevIcon /> : <NextIcon />}
    </StyledButton>
  );
};
const StyledButton = styled.button<{ $direction: CarouselButton2Direction }>`
  padding: 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

  position: absolute;
  top: 50%;
  left: ${({ $direction }) => ($direction === 'prev' ? '60px' : 'calc(100% - 60px)')};
  z-index: 1;
  transform: translate(-50%, -50%);
`;
